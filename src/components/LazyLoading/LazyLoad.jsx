import React, { Suspense } from "react";

// const LazyLoadCompo = React.lazy(() => (import("./LazyLoadCompo")));

// below code is for making custom delay in load
// const LazyLoadCompo = React.lazy(() =>
//   new Promise(resolve =>
//     setTimeout(() =>
//       resolve(import("./LazyLoadCompo")
//       ), 3000)
//   )
// );

const LazyLoadCompo = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./LazyLoadCompo"))
    }, 3000)
  })
})
const LazyLoad = () => {
  return (
    <div style={{ margin: "4rem" }}>
      <h1>Main Component</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoadCompo />
      </Suspense>
    </div>
  )
}

export default LazyLoad;