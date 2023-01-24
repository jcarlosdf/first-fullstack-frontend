export default function Login() {
  return (
    <>
    <div className="flex h-screen w-full">    
      <div className=" h-28 w-320 mx-auto lg:shadow-2xl my-auto grid grid-cols-1 lg:grid-cols-2">
        <div className=" hidden lg:flex bg-login-img bg-no-repeat h-28 w-160  flex-col items-center justify-center" >
          <div className="flex ml-20 mt-24 bg-center">
          <div className="w-64 h-14 bg-login-group-img bg-no-repeat z-10 bg-cover"></div>
          <div className="w-56 h-11 mt-5 bg-login-group1-img bg-no-repeat z-10"></div>
          </div>
        </div>
        <div className="h-28 w-160  flex mx-auto flex-col">
          <div className="bg-login-frame-img bg-no-repeat h-40 w-48 mt-28 mx-auto mb-14">
            </div>
            <div className=" flex flex-col mx-14 mb-4">
            <h2 className="h600-medium-20px mb-4">Login</h2>
            <span className="h400-normal-16px  text-primary-grayLight">Login with the data you entered during your registration.</span>
            </div>
            <div className="flex flex-col mx-14 mb-4">
            <h3 className="font-semibold">Email</h3>
            <input className="rounded-md border-2 outline-none border-[#475E6B] p-2.5" type="mail" placeholder="type@gmail.com" />
            <h3 className="font-semibold">Password</h3>
            <input className="rounded-md border-2 outline-none border-[#475E6B] p-2.5" type="password" placeholder="**********" />
            </div>
            <div className="flex flex-col mx-14 mb-4 gap-4">
            <button className="bg-primary-blue text-[#ffffff] text-base font-semibold leading-5 rounded-md p-3">Log in</button>
            <span className="h400-normal-16px text-primary-grayLight text-center" >Did you forget your password?</span>
            </div>
          </div>
      </div>
    </div>
    </>
  );
}
