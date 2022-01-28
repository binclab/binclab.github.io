window.fbAsyncInit = function() {
    FB.init({
        appId: '310224639988557',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v12.0'
    });
};
// Facebook login with JavaScript SDK
function fbLogin() {
    FB.login(function(response) {
        if (response.authResponse) {
            console.log('Welcome! Fetching your information.... ');
            FB.api('/me', function(response) {
                FB.api('/me/photos', function (response) {
                    console.log(response.data.length);
                })
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    });
}
