<script>
    window.fbAsyncInit = function() {
        FB.init({
            appId: '310224639988557',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v12.0'
        });
    };
</script>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>

// Facebook login with JavaScript SDK
function fbLogin() { 
  FB.login(function(response) { 
    if (response.authResponse) { 
      console.log('Welcome! Fetching your information.... '); 
      FB.api('/me', function(response) { 
        console.log('Good to see you, ' + response.name + '.');
      });
    } else { 
      console.log('User cancelled login or did not fully authorize.');
    }
  });
}
