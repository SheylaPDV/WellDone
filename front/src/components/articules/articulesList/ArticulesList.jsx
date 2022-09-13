import { useEffect, useState } from "react";
import Articule from "./Articule";
import { getLastedArticules } from "../service";
import "./articule.css";
import { useTranslation } from "react-i18next";
import trending from "../../../public/images/chat-flecha-crecer.png";
export default function ArticulesList() {
  const [articules, setArticules] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    getLastedArticules().then((data) => {
      setArticules(data.result);
    });
  }, []);
  return (
    <>
      <h1 className="list-title">
        {" "}
        <img src={trending} />
        {t("articule.title")}
      </h1>
      <div className="articule-list">
        {articules.length ? (
          articules.map((articule) => (
            <Articule key={articule.title} articule={articule} />
          ))
        ) : (
          <h1>There are not articules</h1>
        )}
      </div>
    </>
  );
}
