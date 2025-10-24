import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, setTask] = useState([]);
  const deleteHandler = (index) => {
    const delTask = [...task];
    delTask.splice(index, 1);
    setTask(delTask);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    settitle("");
    setdetails("");
  };

  return (
    <div className="min-h-screen lg:flex bg-gray-900 text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex items-start gap-5 lg:w-1/2 flex-col p-10 "
      >
        <h1 className="text-3xl font-bold">Add notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <textarea
          placeholder="Enter details"
          type="text"
          className="px-5 w-full font-medium h-30 py-2 border-2 outline-none rounded"
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        ></textarea>
        <button className="bg-blue-400 active:scale-98 text-black px-5 py-2 font-medium rounded w-full">
          Add notes
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l p-5">
        <h1 className="text-3xl font-bold">Recent notes</h1>
        <div className="flex  gap-5 items-start justify-start h-[90%] mt-5 flex-wrap overflow-auto ">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className=" flex justify-between flex-col items-start h-70 relative w-50 rounded-2xl pt-6 pb-3 px-4 text-black bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <h3 className="leading-tight text-xl font-bold pt-3">
                  {elem.title}
                </h3>
                <p className="mt-4 leading-tight font-medium text-gray-700">
                  {elem.details}
                </p>
                <button
                  onClick={() => {
                    deleteHandler(idx);
                  }}
                  className="cursor-pointer active:scale-95 w-full bg-red-600  font-bold text-white rounded-2xl "
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
