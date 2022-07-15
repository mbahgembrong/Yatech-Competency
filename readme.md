# Competency Assessment Yatech
### Buatlah fungsi untuk menghitung banyaknya jumlah karakter yang sama dari string yang diinput. Dilarang menggunakan built in function untuk menghitung secara langsung!
- code :  ![Code question 1](/screenshots/code-question-1.png)
- output:![Output question 1](/screenshots/output-question-1.png)
### Buatlah RESTful API dengan kriteria sebagai berikut:
1.	Dapat login, register
2.	Setiap endpoint (kecuali login dan register) ditambahkan otorisasi JWT
3.	Temanya adalah inventory, yaitu data-data produk/barang
4.	CRUD barang/produk
5.	Barang mempunyai detail nama, kategori, jumlah, dan harga
6.	CRUD kategori
7.	Ditest melalui POSTMAN
8.	Prefix endpointnya adalah “/api/v1/”
9.	Deploy (online)!
- code : [Code Question 2](https://github.com/mbahgembrong/Yatech-Competency-Rest)
- link website : [Inventory API](https://vert-baguette-71436.herokuapp.com/api/v1/)

### route:
 - api/v1/auth/login [POST]
 - api/v1/auth/register [POST]
 - api/v1/auth/logout [POST]
 - api/v1/kategori [GET]
 - api/v1/kategori/{id} [GET]
 - api/v1/kategori/{id} [POST]
 - api/v1/kategori/{id} [PUT]
 - api/v1/kategori/{id} [DELETE]
 - api/v1/barang [GET]
 - api/v1/barang/{id} [GET]
 - api/v1/barang/{id} [POST]
 - api/v1/barang/add/{id} [POST]
 - api/v1/barang/sub/{id} [POST]
 - api/v1/barang/{id} [PUT]
 - api/v1/barang/{id} [DELETE]
