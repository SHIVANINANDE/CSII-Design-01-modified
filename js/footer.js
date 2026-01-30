class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!-- CTA Section -->
    <section class="call-of-action position-relative z-index-10">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-8">
            <h2 class="text-white fw-bold mb-2">Ready to transform your workflow?</h2>
            <p class="text-white opacity-75 mb-4 mb-lg-0">Join hundreds of government agencies and enterprises using CSII solutions.</p>
          </div>
          <div class="col-lg-auto">
            <button type="button" class="btn btn-light rounded-pill px-4 py-3 fw-bold text-primary shadow-lg hvr-wobble-skew" data-bs-toggle="modal" data-bs-target="#callback">
              Request Callback <i class="fa-duotone fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Footer -->
    <footer class="footer position-relative text-white pt-5 mt-0">
      <div class="container pt-5">
        <div class="row gy-5">
          <!-- Column 1: Industry ERP Solutions -->
          <div class="col-lg-3 col-md-6">
            <h5 class="f-heading text-uppercase mb-4">Industry ERP Solutions</h5>
            <ul class="list-unstyled d-flex flex-column gap-2 opacity-75 font-size-sm">
              <li><a href="hrms.html" class="text-reset text-decoration-none hover-white">HRMS & Payroll</a></li>
              <li><a href="finance.html" class="text-reset text-decoration-none hover-white">Finance Management</a></li>
              <li><a href="project-mangement.html" class="text-reset text-decoration-none hover-white">Project Management & Control</a></li>
              <li><a href="pin.html" class="text-reset text-decoration-none hover-white">Purchase & Inventory</a></li>
              <li><a href="e-signature.html" class="text-reset text-decoration-none hover-white">TUBA e-Signature</a></li>
              <li><a href="crm.html" class="text-reset text-decoration-none hover-white">Customer Relationship Management</a></li>
              <li><a href="approval-management.html" class="text-reset text-decoration-none hover-white">Approval Management</a></li>
              <li><a href="diary-meeting-management.html" class="text-reset text-decoration-none hover-white">Diary & Meeting Management</a></li>
              <li><a href="tender-management.html" class="text-reset text-decoration-none hover-white">Tender Management</a></li>
              <li><a href="talent-acquisition.html" class="text-reset text-decoration-none hover-white">Talent Acquisition Management</a></li>
              <li><a href="asset-management.html" class="text-reset text-decoration-none hover-white">Asset Management</a></li>
              <li><a href="helpdesk-management.html" class="text-reset text-decoration-none hover-white">Helpdesk Management</a></li>
              <li><a href="performance-management.html" class="text-reset text-decoration-none hover-white">Performance Management</a></li>
              <li><a href="task-management.html" class="text-reset text-decoration-none hover-white">Task Management</a></li>
            </ul>
          </div>

          <!-- Column 2: e-Governance & Citizen Services -->
          <div class="col-lg-3 col-md-6">
            <h5 class="f-heading text-uppercase mb-4">e-Governance & Citizen Services</h5>
             <ul class="list-unstyled d-flex flex-column gap-2 opacity-75 font-size-sm">
               <li><a href="building-plan-approval.html" class="text-reset text-decoration-none hover-white">Building Plan Approval System</a></li>
               <li><a href="ccms.html" class="text-reset text-decoration-none hover-white">CCMS</a></li>
               <li><a href="unauthorized-construction.html" class="text-reset text-decoration-none hover-white">Unauthorized Construction</a></li>
               <li><a href="pgrs.html" class="text-reset text-decoration-none hover-white">PGRS</a></li>
               <li><a href="rti.html" class="text-reset text-decoration-none hover-white">RTI</a></li>
               <li><a href="property-tax-management.html" class="text-reset text-decoration-none hover-white">Property Tax Management</a></li>
               <li><a href="water-tax-management.html" class="text-reset text-decoration-none hover-white">Water Tax Management</a></li>
               <li><a href="property-mutation-system.html" class="text-reset text-decoration-none hover-white">Property Mutation Management</a></li>
               <li><a href="marriage-certificate-system.html" class="text-reset text-decoration-none hover-white">Marriage Certificate Management</a></li>
               <li><a href="death-certificate-system.html" class="text-reset text-decoration-none hover-white">Death Certificate System</a></li>
               <li><a href="birth-certificate-system.html" class="text-reset text-decoration-none hover-white">Birth Certificate System</a></li>
               <li><a href="leased-property-management.html" class="text-reset text-decoration-none hover-white">Leased Property System</a></li>
               <li><a href="govt-hrms-finance-management.html" class="text-reset text-decoration-none hover-white">Government HRMS & Finance Management</a></li>
             </ul>
          </div>

          <!-- Column 3: Discover More & Resources -->
          <div class="col-lg-2 col-md-6">
            <h5 class="f-heading text-uppercase mb-4">Discover More</h5>
            <ul class="list-unstyled d-flex flex-column gap-2 opacity-75 mb-4 font-size-sm">
               <li><a href="about-us.html" class="text-reset text-decoration-none hover-white">About Company</a></li>
               <li><a href="why-csii.html" class="text-reset text-decoration-none hover-white">Why CSII?</a></li>
               <li><a href="our-team.html" class="text-reset text-decoration-none hover-white">Our Team</a></li>
               <li><a href="tuba.html" class="text-reset text-decoration-none hover-white">TUBA Solution</a></li>
               <li><a href="awards-and-recognition.html" class="text-reset text-decoration-none hover-white">Awards & Recognition</a></li>
               <li><a href="digital-marketing.html" class="text-reset text-decoration-none hover-white">Digital Marketing</a></li>
               <li><a href="career.html" class="text-reset text-decoration-none hover-white">Career</a></li>
               <li><a href="contact-us.html" class="text-reset text-decoration-none hover-white">Contact Us</a></li>
            </ul>

            <h5 class="f-heading text-uppercase mb-4">Resources</h5>
            <ul class="list-unstyled d-flex flex-column gap-2 opacity-75 font-size-sm">
               <li><a href="enquiry.html" class="text-reset text-decoration-none hover-white">Sale Support</a></li>
               <li><a href="contact-us.html" class="text-reset text-decoration-none hover-white">Technical Support</a></li>
            </ul>
          </div>

          <!-- Column 4: Company Information & Global -->
          <div class="col-lg-4 col-md-6">
            <h5 class="f-heading text-uppercase mb-4">Company Information</h5>
            <div class="bg-white bg-opacity-10 p-4 rounded-3 mb-4">
               <h6 class="fw-bold text-white mb-2">Canadian Systems International Inc</h6>
               <p class="small opacity-75 mb-3">
                 TOWER-C, Noida One, C-122, Rasoolpur Nawada, Industrial Area, Sector 62, Noida, Uttar Pradesh – 201309
               </p>
               <div class="d-flex align-items-center">
                 <i class="fa-duotone fa-phone-volume text-danger me-2"></i>
                 <span class="fw-bold small">+91-96433-23943</span>
               </div>
            </div>

            <h5 class="f-heading text-uppercase mb-4">Global Presence</h5>
            <div class="d-flex flex-wrap gap-3 mb-4">
              <div class="d-flex align-items-center gap-2" title="India">
                  <img src="images/flag/india.png" alt="India" width="24"> <span class="small opacity-75">India</span>
              </div>
              <div class="d-flex align-items-center gap-2" title="Toronto">
                  <img src="images/flag/Toronto.png" alt="Toronto" width="24"> <span class="small opacity-75">Toronto</span>
              </div>
              <div class="d-flex align-items-center gap-2" title="Dubai">
                  <img src="images/flag/dubai.png" alt="Dubai" width="24"> <span class="small opacity-75">Dubai</span>
              </div>
              <div class="d-flex align-items-center gap-2" title="Manama">
                  <img src="images/flag/manama.png" alt="Manama" width="24"> <span class="small opacity-75">Manama</span>
              </div>
               <div class="d-flex align-items-center gap-2" title="Dakar">
                  <img src="images/flag/dakar.png" alt="Dakar" width="24"> <span class="small opacity-75">Dakar</span>
              </div>
            </div>

            <h5 class="f-heading text-uppercase mb-3">Follow Us</h5>
            <div class="d-flex gap-3 social-link">
              <a href="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin fa-lg"></i></a>
              <a href="https://twitter.com" target="_blank"><i class="fa-brands fa-x-twitter fa-lg"></i></a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="bg-darker py-3 mt-5 border-top border-white border-opacity-10">
        <div class="container text-center">
           <p class="small mb-0 opacity-50">&copy; 2025 CSII India Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    
    <!-- Modals & ScrollToTop -->
    <span class="rounded-circle shadow-lg bg-danger text-white d-inline-flex align-items-center justify-content-center position-fixed scrollTop opacity-0 hvr-float-shadow" style="padding: 12px; width: 45px; height: 45px; bottom: 20px; right: 20px; z-index: 999;" onclick="scrollToTop()">
       <i class="fa-solid fa-arrow-up"></i>
    </span>

    <div class="modal fade" id="callback" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content rounded-4 border-0 shadow-lg">
          <div class="modal-header border-0 pb-0">
             <h5 class="modal-title fw-bold">Request a Call Back</h5>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4 p-lg-5">
             <p class="text-muted mb-4">Complete the form below and our expert team will contact you within 24 hours.</p>
             <form class="callback-form row g-3">
                <div class="col-md-6">
                  <div class="form-floating">
                    <input type="text" class="form-control user-name" id="userName" placeholder="Full Name" required>
                    <label for="userName">Full Name <span class="text-danger">*</span></label>
                  </div>
                </div>
                <div class="col-md-6">
                   <div class="form-floating">
                     <input type="tel" class="form-control user-phone" id="userPhone" placeholder="Phone Number" required>
                     <label for="userPhone">Phone Number <span class="text-danger">*</span></label>
                   </div>
                </div>
                <div class="col-md-6">
                   <div class="form-floating">
                     <input type="email" class="form-control user-email" id="userEmail" placeholder="Email Address" required>
                     <label for="userEmail">Email Address <span class="text-danger">*</span></label>
                   </div>
                </div>
                <div class="col-md-6">
                   <div class="form-floating">
                     <input type="text" class="form-control user-company" id="userCompany" placeholder="Organization" required>
                     <label for="userCompany">Organization / Department <span class="text-danger">*</span></label>
                   </div>
                </div>
                 <div class="col-md-6">
                   <div class="form-floating">
                     <input type="text" class="form-control user-city" id="userCity" placeholder="City" required>
                     <label for="userCity">City <span class="text-danger">*</span></label>
                   </div>
                </div>
                <div class="col-md-6">
                   <div class="form-floating">
                     <select class="form-select user-product" id="userProduct" aria-label="Select Solution">
                       <option selected disabled>Select Products</option>
                       <option value="HRMS">HRMS & Payroll</option>
                       <option value="Finance">Finance Management</option>
                       <option value="Project">Project Control</option>
                       <option value="eGovernance">e-Governance Services</option>
                       <option value="Other">Other</option>
                     </select>
                     <label for="userProduct">Interested Solution <span class="text-danger">*</span></label>
                   </div>
                </div>
                <div class="col-md-6">
                   <div class="form-floating">
                     <input type="date" class="form-control preferred-date" id="prefDate" placeholder="Date">
                     <label for="prefDate">Preferred Date</label>
                   </div>
                </div>
                <div class="col-md-6">
                   <div class="form-floating">
                     <input type="time" class="form-control preferred-time" id="prefTime" placeholder="Time">
                     <label for="prefTime">Preferred Time</label>
                   </div>
                </div>
                <div class="col-12">
                   <div class="form-floating">
                     <textarea class="form-control enquiry-details" placeholder="Leave a message here" id="userMessage" style="height: 100px" required></textarea>
                     <label for="userMessage">Project Details / Requirements <span class="text-danger">*</span></label>
                   </div>
                </div>
                
                <div class="col-12 mt-4">
                   <button type="button" class="btn btn-danger w-100 py-3 rounded-pill fw-bold shadow-sm submit-callback transition-all">
                     <span class="spinner-border spinner-border-sm d-none me-2" role="status" aria-hidden="true"></span>
                     <span class="btn-text">Request Call Back</span>
                   </button>
                </div>
             </form>
          </div>
        </div>
      </div>
    </div>
    `;

    setTimeout(() => {
      const submitBtn = this.querySelector('.submit-callback');
      if (submitBtn) {
        submitBtn.addEventListener('click', async (e) => {
          e.preventDefault();
          const spinner = submitBtn.querySelector('.spinner-border');
          const btnText = submitBtn.querySelector('.btn-text');

          const name = this.querySelector('.user-name').value.trim();
          const phone = this.querySelector('.user-phone').value.trim();
          const email = this.querySelector('.user-email').value.trim();
          const company = this.querySelector('.user-company').value.trim();
          const city = this.querySelector('.user-city').value.trim();
          const product = this.querySelector('.user-product').value;
          const date = this.querySelector('.preferred-date').value.trim();
          const time = this.querySelector('.preferred-time').value.trim();
          const message = this.querySelector('.enquiry-details').value.trim();

          const errors = [];
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          if (!name) errors.push("Name is required.");
          if (!phone || phone.length < 10) errors.push("Valid phone number is required.");
          if (!email || !emailRegex.test(email)) errors.push("Valid email is required.");
          if (!company) errors.push("Organization is required.");
          if (!city) errors.push("City is required.");
          if (product === "Select Products" || !product) errors.push("Please select a product.");
          if (!message) errors.push("Details are required.");

          if (errors.length > 0) {
            alert("Please fix the following errors:\n- " + errors.join("\n- "));
            return;
          }

          submitBtn.disabled = true;
          spinner.classList.remove('d-none');
          btnText.textContent = "Sending...";

          // Construct message
          const preferredDateText = date ? `Date - ${date}` : "Date - NA";
          const preferredTimeText = time ? `Time - ${time}` : "Time - NA";
          const finalMessage = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCompany: ${company}\nCity: ${city}\nProduct: ${product}\nPreferred: ${preferredDateText}, ${preferredTimeText}\nMessage: ${message}`;

          try {
            // Use existing backend
            const authRes = await fetch('https://tubasmartoffice.com/smart-office/rest/auth/authenticateUser', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                username: 'BUGU',
                password: 'BUGU@1234',
                system: 'SMOF'
              })
            });

            const authData = await authRes.json();
            const lid = authData.lid;

            if (!lid) throw new Error('Authentication failed');

            const sendRes = await fetch('https://tubasmartoffice.com/smart-office/rest/bug-tracker/send-mail', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'lid': lid,
                'system': 'SMOF'
              },
              body: JSON.stringify({
                message: finalMessage,
                mailTo: 'aro@csii.in', // Existing email
                subject: 'WEBSITE LEADS - Request Callback'
              })
            });

            const sendData = await sendRes.json();
            alert('Thank you! Your request has been sent successfully.');

            // Close modal
            const modalEl = document.querySelector('#callback');
            /* global bootstrap */
            if (typeof bootstrap !== 'undefined') {
              const modal = bootstrap.Modal.getInstance(modalEl);
              if (modal) modal.hide();
            }

            // Reset form
            submitBtn.closest('form').reset();

          } catch (err) {
            console.error(err);
            alert('Submission failed. Please check your connection or try again later.');
          } finally {
            submitBtn.disabled = false;
            spinner.classList.add('d-none');
            btnText.textContent = "Request Call Back";
          }
        });
      }
    }, 100);
  }
}

customElements.define('footer-js', Footer);
