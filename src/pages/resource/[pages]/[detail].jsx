import Detail from "@/Component/WebinarDetail/Detail";
import React from "react";
import { useRouter } from "next/router";
import Nav from "@/Component/Header/Nav";
import Pdetail from "@/Component/ProductDetail/Pdetail";
import Cdetail from "@/Component/CaseStudiesDetail/Cdetail";
import Vdetail from "@/Component/DemoVideoDetail/Vdetail";
import Bdetail from "@/Component/BlogDetail/Bdetail";
const DynamicDetail = () => {
  const router = useRouter();
  const { detail, pages } = router.query;
  
  return (
    <div>
      {/*  navbar section */}
      <div>
        <Nav />
      </div>

      {pages === "webinar" && <Detail title={detail} />}
      {pages === "product" && <Pdetail title={detail} />}
      {pages === "case-studies" && <Cdetail title={detail} />}
      {pages === "demo-videos" && <Vdetail title={detail} />}
      {pages === "blog" && <Bdetail title={detail} />}
    </div>
  );
};

export default DynamicDetail;
