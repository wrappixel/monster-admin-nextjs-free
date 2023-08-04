'use client'
import Head from "next/head";
import { Col, Row } from "reactstrap";
import SalesChart from "@/app/(DashboardLayout)/components/dashboard/SalesChart";
import Feeds from "@/app/(DashboardLayout)/components/dashboard/Feeds";
import ProjectTables from "@/app/(DashboardLayout)/components/dashboard/ProjectTable";
import Blog from "@/app/(DashboardLayout)/components/dashboard/Blog";
import bg1 from "public/images/bg/bg1.jpg";
import bg2 from "public/images/bg/bg2.jpg";
import bg3 from "public/images/bg/bg3.jpg";
import bg4 from "public/images/bg/bg4.jpg";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monster Free Next Js Dashboard Template</title>
        <meta
          name="description"
          content="Monster Free Next Js Dashboard Template"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/***Sales & Feed***/}
        <Row>
          <Col sm="12" lg="6" xl="7" xxl="8">
            <SalesChart />
          </Col>
          <Col sm="12" lg="6" xl="5" xxl="4">
            <Feeds />
          </Col>
        </Row>
        {/***Table ***/}
        <Row>
          <Col lg="12" sm="12">
            <ProjectTables />
          </Col>
        </Row>
        {/***Blog Cards***/}
        <Row>
          {BlogData.map((blg) => (
            <Col sm="6" lg="6" xl="3" key={blg.title}>
              <Blog
                image={blg.image}
                title={blg.title}
                subtitle={blg.subtitle}
                text={blg.description}
                color={blg.btnbg}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
