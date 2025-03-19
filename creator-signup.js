document.getElementById('creatorForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Check if the agreement checkbox is checked
    const agreeCheckbox = document.getElementById('agreeCheckbox');
    if (!agreeCheckbox.checked) {
        alert("You must agree to the terms before signing up.");
        return; // Don't proceed if not agreed
    }

    // Get the form values
    const name = document.getElementById('creatorName').value;
    const age = document.getElementById('age').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('creatorEmail').value;
    const education = document.getElementById('education').value;
    const resume = document.getElementById('resume').value;

    // Get the files for project photos
    const photos = [
        document.getElementById('photo1').files[0],
        document.getElementById('photo2').files[0],
        document.getElementById('photo3').files[0]
    ];

    // Create an object to store creator's information
    const creator = { name, age, mobile, email, education, resume };

    let photoDataURLs = [];
    let photosLoaded = 0;

    // Function to handle photo load and conversion to base64
    function handlePhotoLoad(fileReader, index) {
        photoDataURLs[index] = fileReader.result;
        photosLoaded++;

        if (photosLoaded === photos.length) {
            creator.photos = photoDataURLs;

            // Store creator data in localStorage
            localStorage.setItem('creator', JSON.stringify(creator));
            alert('Creator Signed Up Successfully!');
            window.location.href = 'index.html'; // Redirect to homepage or dashboard
        }
    }

    // Read each photo file and trigger the corresponding load event
    photos.forEach((photo, index) => {
        if (photo) { // Check if the photo is not null
            const fileReader = new FileReader();
            fileReader.onloadend = () => handlePhotoLoad(fileReader, index);
            fileReader.readAsDataURL(photo);
        } else {
            // If photo is not provided, increment the counter to avoid hanging
            photosLoaded++;
            if (photosLoaded === photos.length) {
                creator.photos = photoDataURLs;

                // Store creator data in localStorage
                localStorage.setItem('creator', JSON.stringify(creator));
                alert('Creator Signed Up Successfully!');
                window.location.href = 'index.html'; // Redirect to homepage or dashboard
            }
        }
    });
});
