function InvoiceForm() {
  return (
    <form>
      <h3>Bill From</h3>
      <div>
        <label htmlFor="from-street">Street Address</label>
        <br />
        <input id="from-street" type="text" />
      </div>

      <div>
        <div>
          <label htmlFor="from-city">City</label>
          <br />
          <input id="from-city" type="text" />
        </div>
        <div>
          <label htmlFor="from-postcode">Post Code</label>
          <br />
          <input id="from-postcode" type="text" />
        </div>
        <div>
          <label htmlFor="from-country">Country</label>
          <br />
          <input id="from-country" type="text" />
        </div>
      </div>
      <h3>Bill To</h3>
      <div>
        <label htmlFor="to-name">Client&apos;s Name</label>
        <br />
        <input id="to-name" type="text" />
      </div>
      <div>
        <label htmlFor="to-email">Client&apos;s Email</label>
        <br />
        <input id="to-email" type="email" />
      </div>
      <div>
        <label htmlFor="to-street">Street Address</label>
        <br />
        <input id="to-street" type="text" />
      </div>
      <div>
        <div>
          <label htmlFor="from-city">City</label>
          <br />
          <input id="from-city" type="text" />
        </div>
        <div>
          <label htmlFor="from-postcode">Post Code</label>
          <br />
          <input id="from-postcode" type="text" />
        </div>
        <div>
          <label htmlFor="from-country">Country</label>
          <br />
          <input id="from-country" type="text" />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="invoicedate">Invoice Date</label>
          <br />
          <input id="invoicedate" type="date" />
        </div>
        <div>
          <label htmlFor="paymentterms">Payment Terms</label>
          <br />
          <input id="paymentterms" type="text" />
        </div>
      </div>
      <div>
        <label htmlFor="projectdesc">Project Description</label>
        <br />
        <input id="projectdesc" type="text" />
      </div>
      <button>+ Add New Item</button>
      <div>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default InvoiceForm;
