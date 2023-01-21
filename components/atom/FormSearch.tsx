const FormSearch = () => {
  return (
    <div className="mt-3 h400-normal-16px flex">
      <div className="flex items-center relative">
        <input
          className="bg-white border border-primary-gray outline-none  w-128  h-12 rounded-3xl  px-4 py-5"
          type="text"
          placeholder="¿Que quieres ver en tu ciudad?"
        />
        <i className="bx bx-search text-primary-grayDark mt absolute right-3.5 cursor-pointer"></i>
      </div>
    </div>
  );
};

export default FormSearch;