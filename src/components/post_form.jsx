import { useState } from "react";
import { useAppContext } from "../context/app/app_context"

const PostForm = () => {
  const { showForm } = useAppContext();
  const [showCalender, setShowCalender] = useState(false);


  const toggleCalender = (e) => {
    if (e.target.value === "later") {
      setShowCalender(true)
    } else {
      setShowCalender(false)
    }
  }
  return (
    <form className={`bg-white shadow-2xl rounded-md p-8 mt-16 w-1/2 mx-auto flex flex-col text-start ${showForm ? "visible" : "invisible"}`}>
      <div className="grid grid-cols-2">
        <div className="flex flex-col border-l border-slate-800">
          <div className="flex mb-7">
            <label className="uppercase text-lg text-slate-800 pe-3" htmlFor="image">عکس</label>
            <input id="image" type="file" accept="image/*" className="cursor-pointer" />
          </div>
          <div className="flex mb-7 align-middle">
            <label className="uppercase text-lg text-slate-800 pe-3 mt-9" htmlFor="content">متن</label>
            <textarea id="content" className="border border-slate-800 p-2" cols="30" rows="5" />
          </div>
          <div className="flex align-bottom mb-7">
            <label className="uppercase text-lg text-slate-800 pe-3 mt-1" htmlFor="title">عنوان</label>
            <select id="title" className="bg-blue-600 text-white px-4 py-1 rounded-md h-9">
              <option value="default" className="bg-white text-slate-800" disabled>انتخاب عنوان</option>
              <option value="طنز" className="bg-white text-slate-800 border-none">طنز</option>
              <option value="انگیزشی" className="bg-white text-slate-800 border-none">انگیزشی</option>
              <option value="آموزشی" className="bg-white text-slate-800 border-none">آموزشی</option>
              <option value="ورزشی" className="bg-white text-slate-800 border-none">ورزشی</option>
              <option value="موسیقی" className="bg-white text-slate-800 border-none">موسیقی</option>
              <option value="فیلم" className="bg-white text-slate-800 border-none">فیلم</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col mx-8">
          <div className="felx mb-3">
            <input type="checkbox" id="eita" className="me-2" />
            <label htmlFor="eita" className="text-lg">ایتا</label>
          </div>
          <div className="felx mb-3">
            <input type="checkbox" id="bale" className="me-2" />
            <label htmlFor="bale" className="text-lg">بله</label>
          </div>
          <div className="felx mb-3">
            <input type="checkbox" id="telegram" className="me-2" />
            <label htmlFor="telegram" className="text-lg">تلگرام</label>
          </div>
          <div className="felx mb-7">
            <input type="checkbox" id="instagram" className="me-2" />
            <label htmlFor="instagram" className="text-lg">اینستاگرام</label>
          </div>
          <div className="felx mb-5">
            <label htmlFor="time" className="uppercase text-lg text-slate-800 pe-3 mt-9" >زمان ارسال</label>
            <select id="time" className="bg-blue-600 text-white px-4 py-1 rounded-md h-9" onChange={toggleCalender}>
              <option value="default" className="bg-white text-slate-800" disabled>انتخاب زمان</option>
              <option value="now" className="bg-white text-slate-800">همین حالا ارسال شود </option>
              <option value="later" className="bg-white text-slate-800"> بعداً ارسال شود </option>
            </select>
          </div>
          <div className={`flex mb-5 ${showCalender ? "visible" : "invisible"}`}>
            <label htmlFor="calender" className="uppercase text-lg text-slate-800 pe-3 mt-9">انتخاب زمان ارسال</label>
            <input type="datetime-local" id="calender"></input>
          </div>
        </div>

      </div>
      <div className="text-center mt-5">
        <button type="submit" className="bg-blue-600 rounded-md text-white px-3 py-2">ایجاد پست جدید</button>
      </div>
    </form>
  )
}

export default PostForm