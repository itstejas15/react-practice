import { useEffect, useState } from "react";

const LazyLoadCompo = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser("Tejas");
  }, [])

  return (
    <>
      {user && <div>
        Hi {user}, I Lazy loaded.
      </div>}
    </>
  )
}

export default LazyLoadCompo;

