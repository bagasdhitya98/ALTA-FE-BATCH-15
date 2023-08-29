import { useSelector, useDispatch } from "react-redux";
import { toggleLanguage } from "../../features/modeSlice";

const Setting = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.theme.mode);
  const language = useSelector((state: any) => state.theme.language);

  return (
    <section
      className={`w-screen h-screen ${
        mode ? "bg-black" : "bg-white"
      } flex justify-center items-center`}
    >
      <div className="w-1/2 h-max rounded-md shadow-md">
        <div className="p-10 flex flex-col gap-5">
          <a
            className="no-outline text-black cursor-pointer hover:text-emerald-700"
            onClick={() => dispatch(toggleLanguage())}
          >
            {language ? "Language" : "Bahasa"} : {language ? "EN" : "ID"}
          </a>
          <a className="no-outline text-black cursor-pointer hover:text-emerald-700">
            {language ? "Agreement" : "Persetujuan"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Setting;
