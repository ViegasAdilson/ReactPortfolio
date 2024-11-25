import "./mycv.css";

function MyCV() {
  return (
    <div className="cv-container">
      <div id="cv-cabecalho">
        <h3 className="highlight">Adilson Pires Lima Viegas</h3>
        <h4 className="highlight">Junior Web\Software Developer</h4>
        <p>
          {/* style="margin-bottom: 0px" */}
          <strong>Address:</strong> Leigh, Manchester
        </p>
        <p>
          {/* style="margin-bottom: 0px" */}
          <strong>Telephone:</strong> 07831185225
        </p>
      </div>
      <div className="perfil">
        <div className="perfil-title">
          <i className="fas fa-user"></i>
          <h4 className="highlight">Personal Profile</h4>
        </div>
        <p>
          A junior Software Engineering graduate with fundamental knowledge of
          software design, development, and testing. An energetic junior
          software developer with fundamental knowledge of software design,
          development, and testing. Seeking to utilize broad educational
          background with excellent analytical, technical, and programming
          skills to thrive as an entry-level software engineer. Ability to work
          by myself without the need for constant supervision by employees. Able
          to work harmoniously with another member of the team. Possesses great
          analytical and problem-solving skills. I am positive, hardworking,
          enthusiastic, committed, professional self-motivate, fast learner with
          ability to quickly adjust the new responsibility in diverse
          environment and strong time management and multi-tasking skills.
          Strong work ethic in team or individual settings product success and
          process efficiency.
        </p>
      </div>
    </div>
  );
}

export default MyCV;
