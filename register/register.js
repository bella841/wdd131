let participantCount = 1;

function participantTemplate(count) {
    return `<section class="participant">
        <p>Participant ${count}</p>
        <div class="item">
            <label for="fname${count}">First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname${count}" required>
        </div>
        <div class="item">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity${count}">
        </div>
        <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee${count}">
        </div>
        <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date${count}">
        </div>
        <div class="item">
            <label for="grade${count}">Grade</label>
            <select id="grade${count}">
                <option value="" disabled selected>Select Grade</option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
            </select>
        </div>
    </section>`;
}

function addParticipant() {
    participantCount++;
    document.querySelector(".participants").insertAdjacentHTML("beforeend", participantTemplate(participantCount));
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    let total = 0;
    feeElements.forEach((element) => {
        total += parseFloat(element.value) || 0;
    });

    return {
        totalFees: total,
        totalParticipants: feeElements.length,
    };
}

function submitForm(event) {
    event.preventDefault();

    if (document.querySelector("#registrationForm").checkValidity()) {
        let totalDetails = totalFees();
        let formInfo = {
            totalFees: totalDetails.totalFees,
            totalParticipants: totalDetails.totalParticipants,
            adultName: document.querySelector("#adult_name").value,
        };

        let summaryHTML = `<h2>Camp registration summary</h2>
            <p>Adult: ${formInfo.adultName}</p>
            <p>Number of Participants: ${formInfo.totalParticipants}</p>
            <p>Total Cost: $${formInfo.totalFees.toFixed(2)}</p>`;

        let summaryElement = document.querySelector("#summary");
        summaryElement.innerHTML = summaryHTML;
        summaryElement.style.display = "block";
    }
}

document.querySelector("#add").addEventListener("click", addParticipant);
document.querySelector("#submitButton").addEventListener("click", submitForm);
