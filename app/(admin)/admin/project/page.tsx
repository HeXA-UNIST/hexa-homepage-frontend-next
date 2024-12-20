"use client";

import { useEffect, useRef } from "react";
import PageIndicator from "../../_lib/components/PageIndicator";
import { observer } from "mobx-react-lite";
import {
  ProjectAdminProvider,
  useProjectAdminStore,
} from "./context/ProjectAdminContext";
import Header from "./views/Header";
import ProjectList from "./views/ProjectList";
import ProjectEditor from "./views/ProjectEditor";

const PageIndicatorPart = observer(() => {
  const store = useProjectAdminStore();

  return (
    <PageIndicator
      totalPage={store.data?.totalPage ?? 0}
      currentIndex={store.pageNum}
      onChange={(index) => {
        store.setPageNum(index);
      }}
    />
  );
});

const Inner = observer(() => {
  const IsFirstRef = useRef(true);
  const store = useProjectAdminStore();

  useEffect(() => {
    if (!IsFirstRef.current) {
      return;
    }

    IsFirstRef.current = false;

    store.loadData();
  }, [store]);

  return (
    <div className="w-full h-full flex flex-col relative gap-6">
      <Header />
      {store.editorStore.isSelected ? (
        <div className="flex-1 w-full relative flex flex-col min-h-0">
          <ProjectEditor />
        </div>
      ) : (
        <>
          <div className="flex-1 w-full relative min-h-0 flex">
            <ProjectList />
          </div>
          <PageIndicatorPart />
        </>
      )}
    </div>
  );
});

export default function AdminProjectRouter() {
  return (
    <ProjectAdminProvider>
      <Inner />
    </ProjectAdminProvider>
  );
}
