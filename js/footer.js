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
          <!-- Column 1: ERP -->
          <div class="col-lg-3 col-md-6">
            <h5 class="f-heading text-uppercase mb-4">Enterprise ERP</h5>
            <ul class="list-unstyled d-flex flex-column gap-2 opacity-75">
              <li><a href="hrms.html" class="text-reset text-decoration-none hover-white">HRMS & Payroll</a></li>
              <li><a href="finance.html" class="text-reset text-decoration-none hover-white">Finance Management</a></li>
              <li><a href="project-mangement.html" class="text-reset text-decoration-none hover-white">Project Control</a></li>
              <li><a href="pin.html" class="text-reset text-decoration-none hover-white">Purchase & Inventory</a></li>
              <li><a href="crm.html" class="text-reset text-decoration-none hover-white">CRM Solutions</a></li>
              <li><a href="asset-management.html" class="text-reset text-decoration-none hover-white">Asset Management</a></li>
            </ul>
          </div>

          <!-- Column 2: Governance -->
          <div class="col-lg-3 col-md-6">
            <h5 class="f-heading text-uppercase mb-4">e-Governance</h5>
             <ul class="list-unstyled d-flex flex-column gap-2 opacity-75">
               <li><a href="building-plan-approval.html" class="text-reset text-decoration-none hover-white">Building Plan Approval</a></li>
               <li><a href="ccms.html" class="text-reset text-decoration-none hover-white">Court Case Mgmt (CCMS)</a></li>
               <li><a href="pgrs.html" class="text-reset text-decoration-none hover-white">Public Grievance (PGRS)</a></li>
               <li><a href="rti.html" class="text-reset text-decoration-none hover-white">RTI Management</a></li>
               <li><a href="property-tax-management.html" class="text-reset text-decoration-none hover-white">Property Tax System</a></li>
               <li><a href="birth-certificate-system.html" class="text-reset text-decoration-none hover-white">Vital Certificates</a></li>
             </ul>
          </div>

          <!-- Column 3: Quick Links & Social -->
          <div class="col-lg-2 col-md-6">
            <h5 class="f-heading text-uppercase mb-4">Company</h5>
            <ul class="list-unstyled d-flex flex-column gap-2 opacity-75 mb-4">
               <li><a href="about-us.html" class="text-reset text-decoration-none hover-white">About Us</a></li>
               <li><a href="our-team.html" class="text-reset text-decoration-none hover-white">Our Team</a></li>
               <li><a href="career.html" class="text-reset text-decoration-none hover-white">Careers</a></li>
               <li><a href="contact-us.html" class="text-reset text-decoration-none hover-white">Contact</a></li>
               <li><a href="privacy-policy.html" class="text-reset text-decoration-none hover-white">Privacy Policy</a></li>
            </ul>

            <h6 class="text-uppercase fw-bold mb-3 small">Follow Us</h6>
            <div class="d-flex gap-3 social-link">
              <a href="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin fa-lg"></i></a>
              <a href="https://twitter.com" target="_blank"><i class="fa-brands fa-x-twitter fa-lg"></i></a>
            </div>
          </div>

          <!-- Column 4: Contact Info -->
          <div class="col-lg-4 col-md-6">
            <div class="bg-white bg-opacity-10 p-4 rounded-3">
               <img src="images/logo.png" alt="CSII Logo" class="img-fluid mb-3 brightness-0 invert-1" style="height: 40px; filter: brightness(0) invert(1);">
               <p class="small opacity-75 mb-3">Canadian Systems International Inc.<br>Transforming governance through technology.</p>
               
               <div class="d-flex mb-3">
                 <i class="fa-duotone fa-location-dot mt-1 me-2 text-danger"></i>
                 <span class="small opacity-75">TOWER-C, Noida One, Sector 62, Noida, UP - 201309</span>
               </div>
               
               <div class="d-flex mb-3">
                 <i class="fa-duotone fa-phone-volume mt-1 me-2 text-danger"></i>
                 <span class="fw-bold">+91 - 96433 23943</span>
               </div>
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
             <p class="text-muted mb-4">Fill in your details and our team will get back to you shortly.</p>
             <form class="callback-form row g-3">
                <div class="col-md-6">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="userName" placeholder="Name" required>
                    <label for="userName">Full Name</label>
                  </div>
                </div>
                <div class="col-md-6">
                   <div class="form-floating">
                     <input type="tel" class="form-control" id="userPhone" placeholder="Phone" required>
                     <label for="userPhone">Phone Number</label>
                   </div>
                </div>
                <!-- Simplified other fields for demo purposes, assume similar to original -->
                <div class="col-12">
                   <button type="button" class="btn btn-danger w-100 py-3 rounded-pill fw-bold shadow-sm submit-callback">Submit Request</button>
                </div>
             </form>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('footer-js', Footer);
