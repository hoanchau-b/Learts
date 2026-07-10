import { Link } from "react-router-dom";

const Account = () => {
    return (
<div>
  {/* Page Title/Header Start */}
  <div className="page-title-section section" data-bg-image="assets/images/bg/page-title-1.webp" style={{backgroundImage: 'url("assets/images/bg/page-title-1.webp")'}}>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="page-title">
            <h1 className="title">My Account</h1>
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html">Home</a></li>
              <li className="breadcrumb-item active">My Account</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Page Title/Header End */}
  {/* My Account Section Start */}
  <div className="section section-padding">
    <div className="container">
      <div className="row learts-mb-n30">
        {/* My Account Tab List Start */}
        <div className="col-lg-4 col-12 learts-mb-30">
          <div className="myaccount-tab-list nav" role="tablist">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html#dashboad" className="" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}>Dashboard <i className="far fa-home" /></a>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html#orders" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Orders <i className="far fa-file-alt" /></a>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html#download" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Download <i className="far fa-arrow-to-bottom" /></a>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html#address" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">address <i className="far fa-map-marker-alt" /></a>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html#account-info" data-bs-toggle="tab" aria-selected="true" role="tab" className="active">Account Details <i className="far fa-user" /></a>
            <Link to="/login-register">Logout <i className="far fa-sign-out-alt" /></Link>
          </div>
        </div>
        {/* My Account Tab List End */}
        {/* My Account Tab Content Start */}
        <div className="col-lg-8 col-12 learts-mb-30">
          <div className="tab-content">
            {/* Single Tab Content Start */}
            <div className="tab-pane fade" id="dashboad" role="tabpanel">
              <div className="myaccount-content dashboad">
                <p>Hello <strong>didiv91396</strong> (not <strong>didiv91396</strong>? <Link to="/login-register">Log out</Link>)</p>
                <p>From your account dashboard you can view your <span>recent orders</span>, manage your <span>shipping and billing addresses</span>, and <span>edit your password and account details</span>.</p>
              </div>
            </div>
            {/* Single Tab Content End */}
            {/* Single Tab Content Start */}
            <div className="tab-pane fade" id="orders" role="tabpanel">
              <div className="myaccount-content order">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Aug 22, 2018</td>
                        <td>Pending</td>
                        <td>$3000</td>
                        <td><a href="https://html-demo-orcin.vercel.app/premium/learts/shopping-cart.html">View</a></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>July 22, 2018</td>
                        <td>Approved</td>
                        <td>$200</td>
                        <td><a href="https://html-demo-orcin.vercel.app/premium/learts/shopping-cart.html">View</a></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>June 12, 2017</td>
                        <td>On Hold</td>
                        <td>$990</td>
                        <td><a href="https://html-demo-orcin.vercel.app/premium/learts/shopping-cart.html">View</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Single Tab Content End */}
            {/* Single Tab Content Start */}
            <div className="tab-pane fade" id="download" role="tabpanel">
              <div className="myaccount-content download">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Expire</th>
                        <th>Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Haven - Free Real Estate PSD Template</td>
                        <td>Aug 22, 2018</td>
                        <td>Yes</td>
                        <td><a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html#"><i className="far fa-arrow-to-bottom mr-1" /> Download File</a></td>
                      </tr>
                      <tr>
                        <td>HasTech - Profolio Business Template</td>
                        <td>Sep 12, 2018</td>
                        <td>Never</td>
                        <td><a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html#"><i className="far fa-arrow-to-bottom mr-1" /> Download File</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Single Tab Content End */}
            {/* Single Tab Content Start */}
            <div className="tab-pane fade" id="address" role="tabpanel">
              <div className="myaccount-content address">
                <p>The following addresses will be used on the checkout page by default.</p>
                <div className="row learts-mb-n30">
                  <div className="col-md-6 col-12 learts-mb-30">
                    <h4 className="title">Billing Address <a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html#" className="edit-link">edit</a></h4>
                    <address>
                      <p><strong>Alex Tuntuni</strong></p>
                      <p>1355 Market St, Suite 900 <br />
                        San Francisco, CA 94103</p>
                      <p>Mobile: (123) 456-7890</p>
                    </address>
                  </div>
                  <div className="col-md-6 col-12 learts-mb-30">
                    <h4 className="title">Shipping Address <a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html#" className="edit-link">edit</a></h4>
                    <address>
                      <p><strong>Alex Tuntuni</strong></p>
                      <p>1355 Market St, Suite 900 <br />
                        San Francisco, CA 94103</p>
                      <p>Mobile: (123) 456-7890</p>
                    </address>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Tab Content End */}
            {/* Single Tab Content Start */}
            <div className="tab-pane fade active show" id="account-info" role="tabpanel">
              <div className="myaccount-content account-details">
                <div className="account-details-form">
                  <form action="https://html-demo-orcin.vercel.app/premium/learts/my-account.html#">
                    <div className="row learts-mb-n30">
                      <div className="col-md-6 col-12 learts-mb-30">
                        <div className="single-input-item">
                          <label htmlFor="first-name">First Name <abbr className="required">*</abbr></label>
                          <input type="text" id="first-name" />
                        </div>
                      </div>
                      <div className="col-md-6 col-12 learts-mb-30">
                        <div className="single-input-item">
                          <label htmlFor="last-name">Last Name <abbr className="required">*</abbr></label>
                          <input type="text" id="last-name" />
                        </div>
                      </div>
                      <div className="col-12 learts-mb-30">
                        <label htmlFor="display-name">Display Name <abbr className="required">*</abbr></label>
                        <input type="text" id="display-name" defaultValue="didiv91396" />
                        <p>This will be how your name will be displayed in the account section and in reviews</p>
                      </div>
                      <div className="col-12 learts-mb-30">
                        <label htmlFor="email">Email Addres <abbr className="required">*</abbr></label>
                        <input type="email" id="email" defaultValue="didiv91396@ismailgul.net" />
                      </div>
                      <div className="col-12 learts-mb-30 learts-mt-30">
                        <fieldset>
                          <legend>Password change</legend>
                          <div className="row learts-mb-n30">
                            <div className="col-12 learts-mb-30">
                              <label htmlFor="current-pwd">Current password (leave blank to leave unchanged)</label>
                              <input type="password" id="current-pwd" />
                            </div>
                            <div className="col-12 learts-mb-30">
                              <label htmlFor="new-pwd">New password (leave blank to leave unchanged)</label>
                              <input type="password" id="new-pwd" />
                            </div>
                            <div className="col-12 learts-mb-30">
                              <label htmlFor="confirm-pwd">Confirm new password</label>
                              <input type="password" id="confirm-pwd" />
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div className="col-12 learts-mb-30">
                        <button className="btn btn-dark btn-outline-hover-dark">Save Changes</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div> {/* Single Tab Content End */}
          </div>
        </div> {/* My Account Tab Content End */}
      </div>
    </div>
  </div>
  {/* My Account Section End */}
</div>
    );
};
export default Account;
