const anchors = document.getElementsByTagName( 'a' );
let loginAnchor;
for ( let anchor of anchors )
{
    if ( anchor.id === 'login' )
    {
        loginAnchor = anchor;
    }
}
if ( !loginAnchor )
{
    throw new Error('No login anchor');
}
const cookies = document.cookie.split('; ');
for ( let cookie of cookies )
{
    const cookieData = cookie.split( '=' );
    const key = cookieData[ 0 ];
    const value = cookieData[ 1 ];
    if ( key === 'user' )
    {
        console.log( key, value );
    } else if ( key === 'account' )
    {
        console.log( key, value );
    } else
    {
        console.log( key );
    }
}
