const pendaftarList = [];

        const registrationForm = document.getElementById('registrationForm');
        const tableBody = document.getElementById('tableBody');
        const averageUangSanguSpan = document.getElementById('averageUangSangu');
        const averageUmurSpan = document.getElementById('averageUmur');


        registrationForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const nama = document.getElementById('nama').value;
            const umur = parseInt(document.getElementById('umur').value);
            const uangSangu = parseInt(document.getElementById('uangSangu').value);

            if (nama.length >= 10 && umur >= 25 && uangSangu >= 100 && uangSangu <= 1000) {
                
                const addPendaftar = new Promise((resolve) => {
                    const pendaftar = { nama, umur, uangSangu };
                    pendaftarList.push(pendaftar);
                    resolve(pendaftar);
                });

                
                const pendaftar = await addPendaftar;

                const row = tableBody.insertRow();
                const cellNama = row.insertCell(0);
                const cellUmur = row.insertCell(1);
                const cellUangSangu = row.insertCell(2);

                cellNama.textContent = pendaftar.nama;
                cellUmur.textContent = pendaftar.umur;
                cellUangSangu.textContent = pendaftar.uangSangu;

                const totalUangSangu = pendaftarList.reduce((total, pendaftar) => total + pendaftar.uangSangu, 0);
                const totalUmur = pendaftarList.reduce((total, pendaftar) => total + pendaftar.umur, 0);
                const averageUangSangu = totalUangSangu / pendaftarList.length;
                const averageUmur = totalUmur / pendaftarList.length;

                averageUangSanguSpan.textContent = averageUangSangu.toFixed(2);
                averageUmurSpan.textContent = averageUmur.toFixed(2);
            } else {
                alert('Data tidak memenuhi kriteria.');
            }
        });
   