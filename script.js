    // Image Upload Preview
    document.getElementById('imageUpload').addEventListener('change', function (e) {
        const reader = new FileReader();
        reader.onload = function () {
          const preview = document.getElementById('preview');
          preview.src = reader.result;
          preview.style.display = 'block';
        };
        reader.readAsDataURL(e.target.files[0]);
      });
  
      // Generate Resume
      document.getElementById('resumeForm').addEventListener('submit', function (e) {
        e.preventDefault();
  
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const linkedin = document.getElementById('linkedin').value;
        const portfolio = document.getElementById('portfolio').value;
        const location = document.getElementById('location').value;
        const summary = document.getElementById('summary').value;
        const skills = document.getElementById('skills').value;
        const jobTitle1 = document.getElementById('jobTitle1').value;
        const company1 = document.getElementById('company1').value;
        const dates1 = document.getElementById('dates1').value;
        const responsibilities1 = document.getElementById('responsibilities1').value;
        const degree = document.getElementById('degree').value;
        const university = document.getElementById('university').value;
        const gradDate = document.getElementById('gradDate').value;
        const gpa = document.getElementById('gpa').value;
        const coursework = document.getElementById('coursework').value;
        const honors = document.getElementById('honors').value;
        const certifications = document.getElementById('certifications').value;
        const projects = document.getElementById('projects').value;
        const languages = document.getElementById('languages').value;
        const image = document.getElementById('preview').src;
  
        // Generate Resume Content
        const resumeContent = `
          <div style="border: 2px solid #ff6f61; padding: 20px; border-radius: 15px; background: #fff; color: #000;">
            <div style="text-align: center;">
              <img src="${image}" alt="User Image" style="width: 150px; height: 150px; border-radius: 50%; border: 3px solid #ff6f61;">
              <h1>${name}</h1>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              ${linkedin ? `<p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>` : ''}
              ${portfolio ? `<p><strong>Portfolio:</strong> <a href="${portfolio}" target="_blank">${portfolio}</a></p>` : ''}
              ${location ? `<p><strong>Location:</strong> ${location}</p>` : ''}
            </div>
            <hr>
            <h2>Professional Summary</h2>
            <p>${summary}</p>
            <h2>Skills</h2>
            <p>${skills}</p>
            <h2>Work Experience</h2>
            <p><strong>${jobTitle1}</strong> at ${company1} (${dates1})</p>
            <p>${responsibilities1}</p>
            <h2>Education</h2>
            <p><strong>${degree}</strong> from ${university} (${gradDate})</p>
            ${gpa ? `<p><strong>GPA:</strong> ${gpa}</p>` : ''}
            ${coursework ? `<p><strong>Relevant Coursework:</strong> ${coursework}</p>` : ''}
            ${honors ? `<p><strong>Honors/Awards:</strong> ${honors}</p>` : ''}
            ${certifications ? `<h2>Certifications</h2><p>${certifications}</p>` : ''}
            ${projects ? `<h2>Projects</h2><p>${projects}</p>` : ''}
            ${languages ? `<h2>Languages</h2><p>${languages}</p>` : ''}
          </div>
        `;
  
        // Display Resume Preview
        document.getElementById('resumeContent').innerHTML = resumeContent;
        document.getElementById('resumePreview').style.display = 'block';
  
        // Smooth Scroll to Resume Preview
        document.getElementById('resumePreview').scrollIntoView({ behavior: 'smooth' });
      });
  
      // Download Resume as PDF
      document.getElementById('downloadBtn').addEventListener('click', function () {
        const resumeContent = document.getElementById('resumeContent').innerHTML;
        const originalContent = document.body.innerHTML;
  
        document.body.innerHTML = resumeContent;
        window.print(); // Opens print dialog to save as PDF
        document.body.innerHTML = originalContent;
      });
  
      // Add More Work Experience
      document.getElementById('addWorkExperience').addEventListener('click', function () {
        const workExperienceSection = document.createElement('div');
        workExperienceSection.innerHTML = `
          <div class="form-group">
            <label for="jobTitle2">Job Title</label>
            <input type="text" id="jobTitle2" placeholder="Software Engineer">
          </div>
          <div class="form-group">
            <label for="company2">Company Name</label>
            <input type="text" id="company2" placeholder="ABC Corp">
          </div>
          <div class="form-group">
            <label for="dates2">Dates of Employment (Month/Year - Month/Year)</label>
            <input type="text" id="dates2" placeholder="Jan 2020 - Present">
          </div>
          <div class="form-group">
            <label for="responsibilities2">Responsibilities and Achievements</label>
            <textarea id="responsibilities2" placeholder="Developed and maintained web applications using React and Node.js..."></textarea>
          </div>
        `;
        document.getElementById('resumeForm').insertBefore(workExperienceSection, document.getElementById('addWorkExperience'));
      });
