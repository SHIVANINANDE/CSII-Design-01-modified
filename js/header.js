class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header>
    <nav class="navbar navigation main-nav navbar-expand-xl py-3 fixed-top bg-white">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <img src="images/logo.png" alt="csii india logo" class="img-fluid">
      </a>
      <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-duotone fa-bars fa-lg text-dark"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                       
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Company
            </a>
            <ul class="dropdown-menu border-0 shadow-lg">
              <li><a class="dropdown-item" href="about-us.html">About Us</a></li>
              <li><a class="dropdown-item" href="why-csii.html">Why CSII</a></li>
              <li><a class="dropdown-item" href="vision-mission.html">Mission & Vision</a></li>
              <li><a class="dropdown-item" href="our-team.html">Our Team</a></li>
              <li><a class="dropdown-item" href="awards-and-recognition.html">Awards & Recognition</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="enquiry.html">Enquiry</a></li>
            </ul>
          </li> 
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul class="dropdown-menu center-dropdown border-0 shadow-lg menu-wide p-4">
             <div class="container-fluid">
               <div class="row g-4">
                 <div class="col-lg-3 col-md-6">
                   <h6 class="dropdown-header text-uppercase fw-bold text-primary mb-3">Enterprise Suite</h6>
                   <ul class="list-unstyled">
                     <li><a class="dropdown-item" href="hrms.html">HRMS & Payroll</a></li>
                     <li><a class="dropdown-item" href="finance.html">Finance & Accounts</a></li>
                     <li><a class="dropdown-item" href="project-mangement.html">Project Control</a></li>
                     <li><a class="dropdown-item" href="e-signature.html">TUBA e-Signature</a></li>
                     <li><a class="dropdown-item" href="pin.html">Purchase & Inventory</a></li>
                     <li><a class="dropdown-item" href="talent-acquisition.html">Talent Acquisition</a></li>
                     <li><a class="dropdown-item" href="asset-management.html">Asset Management</a></li>
                     <li><a class="dropdown-item" href="crm.html">CRM</a></li>
                   </ul>
                 </div>                  
                 <div class="col-lg-3 col-md-6">
                   <h6 class="dropdown-header text-uppercase fw-bold text-primary mb-3">Management Tools</h6>
                   <ul class="list-unstyled">
                     <li><a class="dropdown-item" href="helpdesk-management.html">Helpdesk System</a></li>
                     <li><a class="dropdown-item" href="performance-management.html">Performance Mgmt</a></li>
                     <li><a class="dropdown-item" href="task-management.html">Task Management</a></li>
                     <li><a class="dropdown-item" href="approval-management.html">Approval Workflow</a></li>
                     <li><a class="dropdown-item" href="diary-meeting-management.html">Diary & Meetings</a></li>
                     <li><a class="dropdown-item" href="tender-management.html">Tender Mgmt</a></li>
                   </ul>
                 </div>
                 <div class="col-lg-3 col-md-6">
                   <h6 class="dropdown-header text-uppercase fw-bold text-primary mb-3">e-Governance (A-M)</h6>
                   <ul class="list-unstyled">
                     <li><a class="dropdown-item" href="building-plan-approval.html">Building Plan</a></li>
                     <li><a class="dropdown-item" href="ccms.html">Court Cases (CCMS)</a></li>
                     <li><a class="dropdown-item" href="unauthorized-construction.html">Unauthorized Const.</a></li>
                     <li><a class="dropdown-item" href="pgrs.html">Grievance (PGRS)</a></li>
                     <li><a class="dropdown-item" href="rti.html">RTI Management</a></li>
                     <li><a class="dropdown-item" href="property-tax-management.html">Property Tax</a></li>
                     <li><a class="dropdown-item" href="water-tax-management.html">Water Tax</a></li>
                   </ul>
                 </div>
                 <div class="col-lg-3 col-md-6">
                   <h6 class="dropdown-header text-uppercase fw-bold text-primary mb-3">e-Governance (N-Z)</h6>
                   <ul class="list-unstyled">
                     <li><a class="dropdown-item" href="property-mutation-system.html">Property Mutation</a></li>
                     <li><a class="dropdown-item" href="marriage-certificate-system.html">Marriage Cert.</a></li>
                     <li><a class="dropdown-item" href="death-certificate-system.html">Death Cert.</a></li>
                     <li><a class="dropdown-item" href="birth-certificate-system.html">Birth Cert.</a></li>
                     <li><a class="dropdown-item" href="leased-property-management.html">Leased Property</a></li>
                     <li><a class="dropdown-item" href="govt-hrms-finance-management.html">Govt HRMS & Finance</a></li>
                   </ul>
                 </div>
               </div>
             </div>
            </ul>
            
          </li>
          <li class="nav-item">
            <a class="nav-link" href="tuba.html">Platform (TUBA)</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact-us.html">Contact Us</a>
          </li>                      
        </ul> 
        
        <button type="button" class="btn btn-outline-danger btn-sm rounded-pill px-4 fw-bold ms-2 bookdemo" data-bs-toggle="modal" data-bs-target="#callback">Book Demo</button>
      </div>
    </div>
  </nav>
  </header>
   `;
  }
}

customElements.define('header-js', Header);
