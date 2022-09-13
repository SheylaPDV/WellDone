import { useEffect, useState } from "react";
import Articule from "./Articule";
import { getLastedArticules } from "../service";
import "./articule.css";
import ArticulesList from "./ArticulesList";
import { useTranslation } from "react-i18next";
import trending from "../../../public/images/chat-flecha-crecer.png";
export default function ArticleDetail({ title, content }) {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="list-title">
        {" "}
        <img src={trending} />
        {t("articule.title")}
      </h1>
      <div className="articule-list">{title}</div>
    </>
  );
}
