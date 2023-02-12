// my solution

function match(candidate, job) {
  // is the job a match for this candidate?
  for (const jobSkill of job.skills) {
    let candidateSkill = candidate.skills.find(
      (skill) => skill.name === jobSkill.name
    );
    if (!candidateSkill) {
      candidateSkill = candidate.skills.find((skill) =>
        jobSkill.substitutions.find((sub) => sub.name === skill.name)
      );
    }
    if (!candidateSkill) {
      return false;
    }
    if (candidateSkill.preference === "avoid") {
      return false;
    }
    if (
      candidateSkill.experience +
        (candidateSkill.preference === "desired"
          ? 0.5 * candidateSkill.experience
          : 0) <
      jobSkill.idealYears
    ) {
      return false;
    }
  }
  return true;
}


// other solutions

function match(candidate, job) {
  const result = job.skills.every((req) => fulfillsRequirement(candidate, req));
  return result;
}

function fulfillsRequirement(candidate, req) {
  let skill = findSkill(candidate, req.name);
  if (skill) {
    if (skill.preference === "avoid") return false;

    let experience = skill.experience;
    if (skill.preference === "desired") experience *= 1.5;
    if (experience >= req.idealYears) return true;
  }

  if (req.substitutions) {
    return req.substitutions.some((subst) => {
      skill = findSkill(candidate, subst.name);
      if (!skill) return false;
      if (skill.preference === "avoid") return false;
      if (skill.experience < req.idealYears) return false;
      return true;
    });
  }

  return false;
}

function findSkill(candidate, name) {
  return candidate.skills.find((skill) => skill.name === name);
}

//

function match(candidate, job) {
  for (const jobSkill of job.skills) {
    if (!matchCandidateSkill(jobSkill, candidate)) return false;
  }
  return true;
}

function matchCandidateSkill(jobSkill, candidate) {
  const primarySkillCheck = matchPrimarySkill(jobSkill, candidate);
  if (primarySkillCheck === true) return true;
  if (primarySkillCheck === "avoid") return false;
  return matchSubstitutions(jobSkill, candidate) === true;
}

function matchPrimarySkill(jobSkill, candidate) {
  const matchedPrimarySkill = candidate.skills.find(
    (candidateSkill) => candidateSkill.name === jobSkill.name
  );
  return decideOnSkill(matchedPrimarySkill, jobSkill);
}

function matchSubstitutions(jobSkill, candidate) {
  const matchedSubSkill = candidate.skills.find((candidateSkill) =>
    jobSkill.substitutions.find(
      (substitute) => substitute.name === candidateSkill.name
    )
  );
  return decideOnSkill(matchedSubSkill, jobSkill);
}

function decideOnSkill(candidateSkill, jobSkill) {
  if (!candidateSkill) return false;
  switch (candidateSkill.preference) {
    case "avoid":
      return "avoid";
    case "desired":
      return candidateSkill.experience * 1.5 >= jobSkill.idealYears;
    case "neutral":
      return candidateSkill.experience >= jobSkill.idealYears;
  }
}

//

function match(candidate, job) {
  let skills = candidate.skills;
  return job.skills.every(
    (jobSkill) =>
      !candidate.skills.some(
        (skill) => skill.name == jobSkill.name && skill.preference == "avoid"
      ) &&
      candidate.skills.some(
        (skill) =>
          jobSkill.substitutions
            .map((x) => x.name)
            .concat(jobSkill.name)
            .includes(skill.name) &&
          skill.experience * [1, 1.5][+(skill.preference == "desired")] >=
            jobSkill.idealYears
      )
  );
}

//





// test


const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    let candidate = {
      skills: [{ name: "CoffeeScript", experience: 3, preference: "neutral" }],
    };
    let job = {
      skills: [
        {
          name: "CoffeeScript",
          idealYears: 3,
          substitutions: [{ name: "JavaScript" }],
        },
      ],
    };
    Test.expect(match(candidate, job), "should match on primary skill");
    candidate.skills[0].name = "JavaScript"; // candidate skill satisfies substitute
    Test.expect(match(candidate, job), "should match on substitute skill");
    job.skills[0].idealYears = 10; // raise the ideal years above candidate years
    Test.expect(
      !match(candidate, job),
      "should not match when ideal years are higher"
    );
  });
});
