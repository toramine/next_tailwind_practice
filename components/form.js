import { useRef } from "react";

function Form() {
  const validate_text = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    validate_text.current.setCustomValidity("送信機能は実装してません");
  };

  return (
    <div className="bg-white w-[100%] h-[700px] flex_jcc_aic">
      <div className="bg-sky-500 flex-1 flex_jcc_aic h-[500px] mx-3 rounded-3xl">
        <div className="w-[80%]">
          <form className="flex_col_aic py-3" onSubmit={(e) => handleSubmit(e)}>
            <div className="mt-3 text-white text-3xl">username</div>
            <input type="text" placeholder="text" className="w-[60%]" />
            <div className="mt-3 text-white text-3xl">mail</div>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-[60%]"
            />
            <div className="mt-3 text-white text-3xl">textarea</div>
            <textarea
              type="textarea"
              placeholder="textarea"
              className="w-[60%] h-[200px]"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 w-[200px] mt-8 p-3 text-white rounded-3xl"
              ref={validate_text}
            >
              button
            </button>
          </form>
        </div>
      </div>
      <div className="bg-gray-100 flex-1 h-[500px] mx-3 rounded-3xl">image</div>
    </div>
  );
}

export default Form;
