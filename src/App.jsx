import Headers from "./components/Headers"

function App() {

  return (
    <>
      <main className="p-10 m-5 lg:p-5 lg:max-w-xl lg:mx-auto bg-white rounded shadow">
        <Headers/>
        <section className="flex flex-col items-end justify-end">
          <h2>New Bridge Garage</h2>
          <p>Your Address</p>
        </section>

        <section className="mt-5">
          <h2 className="text-xl">Client&apos;s Name</h2>
          <p>Client&apos;s Address</p>
        </section>

        <article className="my-5">
          <ul>
            <li>Invoice Number:</li>
            <li>Invoice Date:</li>
            <li>Due Date:</li>
          </ul>
        </article>

        {/*Table Details*/}
        <div className="my-5"></div>
        {/*End of Table Details*/}

        {/*Notes*/}
        <section className="my-5">
          <p>Notes to the client.</p>
        </section>
        {/*End of Notes*/}

        <footer>
          <ul>
            <li>Your Name</li>
            <li>Email</li>
            <li>Phone</li>
            <li>Account Holder</li>
            <li>Account Number</li>
            <li>Website</li>
          </ul>
        </footer>
      </main>
    </>
  )
}

export default App
