var g_ReloadWithFacebookID=false;function statusChangeCallback(response){if(response.status==='connected'){GetFBUserInfo();}else{}}
function checkLoginState(){FB.getLoginStatus(function(response){statusChangeCallback(response);});}
function GetFBUserInfo()
{FB.api('/me',{fields:'name, email, gender, picture'},function(response){var l_Type=-1;$.ajax({method:'POST',dataType:'json',url:JS_DIR_WEBSITESERVICES+'get_tibiafacebookinfo.php',data:{a_FB_ID:response.id}}).done(function(data){if(response.id!==undefined){$('.fb-id').val(response.id);$('.fb-name').html(response.name);$('.fb-email').val(response.email);$('.fb-gender').val(response.gender);$('.fb-picture').attr('src',response.picture.data.url);l_Type=data.type;if($('#autosubmit').val()=='on'){if(l_Type==0){$('#autosubmit').val('off');var l_CharacterName=$('#CreateAccountAndCharacterForm #charactername').val();$('#CreateTibiaAccountByFacebookForm #charactername').val(l_CharacterName);$('#CreateTibiaAccountByFacebookForm').submit();}else if(l_Type==1){$('#autosubmit').val('off');$('#LoginToTibiaByFacebookForm').submit();}else{}}else{}
if(g_ReloadWithFacebookID===true){$('#ReloadWithFacebookID').submit();}}else{$('#FacebookLoginErrorMessage').show();}}).fail(function(){l_Type=-1;}).always(function(){if(l_Type>=0){HideWhenLoggedInToFacebook();ShowWhenLoggedInToFacebook(l_Type);}});});}
function HideWhenLoggedInToFacebook()
{$('.HideWhenLoggedInToFacebook').hide();}
function ShowWhenLoggedInToFacebook(a_Type)
{$('#ShowWhenLoggedInToFacebookType'+a_Type).show();$('.ShowWhenLoggedInToFacebookType'+a_Type).show();$('#FacebookLoginErrorMessage').hide();}
window.fbAsyncInit=function(){FB.init({appId:JS_FACEBOOKAPPID,cookie:true,xfbml:true,version:'v10.0'});FB.getLoginStatus(function(response){statusChangeCallback(response);});};(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}
js=d.createElement(s);js.id=id;js.src="https://connect.facebook.net/en_US/sdk.js";fjs.parentNode.insertBefore(js,fjs);}(document,'script','facebook-jssdk'));