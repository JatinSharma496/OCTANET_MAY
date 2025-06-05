
    // Modal Functions
    function openLoginModal() {
      document.getElementById('loginModal').style.display = 'flex';
    }

    function closeLoginModal() {
      document.getElementById('loginModal').style.display = 'none';
    }

    function openSignupModal() {
      closeLoginModal();
      document.getElementById('signupModal').style.display = 'flex';
    }

    function closeSignupModal() {
      document.getElementById('signupModal').style.display = 'none';
    }

    function quickAppointment() {
      document.getElementById('appointmentModal').style.display = 'flex';
    }

    function closeAppointmentModal() {
      document.getElementById('appointmentModal').style.display = 'none';
    }

    // Service Functions
    function openDepartment(dept) {
      alert(`Opening ${dept} department details. Advanced booking system coming soon!`);
    }

    function checkBeds() {
      alert('Bed Availability:\n• General Ward: 15 beds available\n• ICU: 3 beds available\n• Private Rooms: 8 beds available');
    }

    function viewBills() {
      alert('Billing Portal: Login to view your medical bills and insurance details.');
      openLoginModal();
    }

    function emergencyContact() {
      alert('🚨 EMERGENCY HOTLINE: +91-1234-567-890\n\nFor immediate medical assistance, call now or visit our 24/7 Emergency Department.');
    }

    function labReports() {
      alert('Lab Reports: Login to access your test results and medical reports.');
      openLoginModal();
    }

    function telemedicine() {
      alert('Telemedicine Service: Consult with our doctors from the comfort of your home. Book online consultation now!');
      quickAppointment();
    }

    // Close modals when clicking outside
    window.onclick = function(event) {
      const modals = document.querySelectorAll('.login-modal');
      modals.forEach(modal => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
