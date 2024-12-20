import { getNewsListAdmin } from "../../../_lib/services/admin/news/NewsAdminService";
import adminNotificationStore from "../../../_lib/store/AdminNotificationStore";
import { makeAutoObservable, observable, runInAction } from "mobx";

import { GetNewsListResultAdmin } from "../../../_lib/models/admin/NewsAdmin";

// eslint-disable-next-line import/no-cycle
import NewsEditorAdminStore from "./NewsEditorAdminStore";

export default class NewsAdminStore {
  private _isLoading = false;

  private _pageIndex = 0;

  private _perPage = 10;

  private _data: GetNewsListResultAdmin | null = null;

  private _editorStore: NewsEditorAdminStore; // Not controlled by MobX

  constructor() {
    this._editorStore = new NewsEditorAdminStore(this);

    makeAutoObservable<
      NewsAdminStore,
      "_isLoading" | "_pageIndex" | "_perPage" | "_data"
    >(this, {
      _isLoading: observable,
      _pageIndex: observable,
      _perPage: observable,
      _data: observable,
    });
  }

  get isLoading() {
    return this._isLoading;
  }

  get pageNum() {
    return this._pageIndex;
  }

  get data() {
    return this._data;
  }

  get editorStore() {
    return this._editorStore;
  }

  loadData = async () => {
    runInAction(() => {
      this._isLoading = true;
    });

    try {
      const result = await getNewsListAdmin(this._pageIndex, this._perPage);

      runInAction(() => {
        this._data = result;
      });
    } catch (e) {
      console.error(e);

      adminNotificationStore.addNotification(
        "뉴스 목록 로드 오류",
        "뉴스 목록을 불러오는 중 오류가 발생했습니다."
      );
    }

    runInAction(() => {
      this._isLoading = false;
    });
  };

  setPageNum = async (pageNum: number) => {
    runInAction(() => {
      this._pageIndex = pageNum;
    });

    await this.loadData();
  };

  createNews = () => {
    this._editorStore.selectNews(-1);
  };
}
