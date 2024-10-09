<template>
    <!-- Navbar -->

<!-- /.navbar -->

<HeaderComponents/>
<SidebarComponents/>
<!-- Main Sidebar Container -->


<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0"><b class="text-primary"><marquee behavior="" direction="">ຍິນດີຕອນຮັບເຂົ້າສູ່ລະບົບ</marquee></b></h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><router-link to="/dashboard" href="#">ໜ້າຫຼັກ</router-link></li>
              <li class="breadcrumb-item active">Admin</li>
            </ol>
          </div><!-- /.col -->
        </div>
        <div class="row mb-2">
          <div class="col-sm-6">
            
          </div>
          <div class="col-sm-6">
            <div class="row">
              <div class="col-md-6"></div>
              <div class="col-md-6">
                <div class="d-flex">
                  <input type="search" required v-model="searchQuery" class="form-control" placeholder="ຊອກຫາ...">
                  <button @click="SearchAdmin" class="btn btn-primary ml-2"><i class="fas fa-search"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div><!-- /.container-fluid -->
  </div>
  <!-- /.content-header -->

  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <!-- Small boxes (Stat box) -->
        <div class="row">
          <div class="col-md-6">
            <h3 class="text-center"><b>ຟອມເພີ່ມແອັດມິນ</b></h3>
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">ເພີ່ມແອັດມິນ</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="CreateAdmin">
                <div class="card-body">
                  <div class="row">
                    <div class="form-group ml-5 mb-3">
                    <label for="exampleInputEmail1">ຊື່: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" required v-model="userName" id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                  </div>
                  <div class="form-group ml-5 mb-3">
                    <label for="exampleInputEmail1">Email: <span class="text-danger">*</span></label>
                    <input type="email" class="form-control" required v-model="email" id="exampleInputEmail1" placeholder="Enter email">
                  </div>
                  <div class="form-group ml-5 mb-3">
                    <label for="exampleInputPassword1">Password: <span class="text-danger">*</span></label>
                    <input type="password" class="form-control" required v-model="password" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  <div class="form-group ml-5 mb-3">
                    <label for="exampleInputPassword1">ເບີໂທ: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" required v-model="phoneNumber" id="exampleInputPassword1" placeholder="020 XXXXXXXX">
                  </div>
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="reset" class="btn btn-danger"><i class="fas fa-times mr-1"></i>ຍົກເລີກ</button>&nbsp;&nbsp;<button type="submit" class="btn btn-primary"><i class="fas fa-print mr-1"></i> ບັນທຶກ</button>
                </div>
              </form>
            </div>
            <!-- /.card -->

            
            <!-- /.card -->

          </div>
          <div class="col-md-6">
            
            <h3 class="text-center text-primary"><b>ລາຍຊື່ແອັດມິນ</b></h3>
            <div class="overflow-auto">
              <table class="table table-striped">
              <thead>
                <tr>
                  <th>ລຳດັບ</th>
                  <th>ຊື່</th>
                  <th>ອີເມວ</th>
                  <th>ເບີໂທ</th>
                  <th>ສ້າງວັນທີ</th>
                  <th>ອັບເດດວັນທີ</th>
                  <th>ປຸ່ມຄຳສັ່ງ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="admin in admins" :key="admin.id">
                  <td>{{ admin.id }}</td>
                  <td>{{ admin.userName }}</td>
                  <td>{{ admin.email }}</td>
                  <td>{{ admin.phoneNumber }}</td>
                  <td><b class="text-success">{{ admin.created_at }}</b></td>
                  <td><b class="text-danger">{{ admin.updated_at }}</b></td>
                  <td>
                    <button @click="ShowAdminItem(admin.id)" class="btn btn-warning" data-toggle="modal" data-target="#modal-info"><i class="fas fa-edit"></i></button>
                    <button @click="ConfirmDelete(admin.id)" href="" class="btn btn-danger"><i class="fas fa-times"></i></button>
                  </td>
                </tr>
              </tbody>
            </table>
                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modal-info">
                  Launch Info Modal
                </button>
            </div>
          </div>
        </div>
        <div class="modal fade" id="modal-info">
        <div class="modal-dialog modal-md">
          <div class="modal-content ">
            <div class="modal-header bg-info">
              <h4 class="modal-title">ຟອມແກ້ໄຂຂໍ້ມູນແອັດມິນ</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form enctype="multipart/form-data" @submit.prevent="UpdateAdmin">
              <div class="modal-body">
              <div class="row">
                <div class="form-group ml-3 mb-3">
                    <label for="exampleInputEmail1">ຊື່: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" required v-model="updateuserName" id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                  </div>
                  <div class="form-group ml-3 mb-3">
                    <label for="exampleInputEmail1">Email: <span class="text-danger">*</span></label>
                    <input type="email" class="form-control" required v-model="updateemail" id="exampleInputEmail1" placeholder="Enter email">
                  </div>
                  <div class="form-group ml-3 mb-3">
                    <label for="exampleInputPassword1">Password: <span class="text-danger">*</span></label>
                    <input type="password" class="form-control" required v-model="updatepassword" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  <div class="form-group ml-3 mb-3">
                    <label for="exampleInputPassword1">ເບີໂທ: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" required v-model="updatephoneNumber" id="exampleInputPassword1" placeholder="020 XXXXXXXX">
                  </div>
              </div>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-danger" data-dismiss="modal"> <i class="fas fa-times mr-1"></i> ຍົກເລີກ</button>
              <button type="submit" class="btn btn-info"><i class="fas fa-print mr-1"></i> ບັນທຶກ</button>
            </div>
            </form>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>

        

      <!-- /.row (main row) -->
    </div><!-- /.container-fluid -->
  </section>
  <!-- /.content -->
</div>
<!-- /.content-wrapper -->
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import HeaderComponents from './includes/HeaderComponents.vue';
import SidebarComponents from './includes/SidebarComponents.vue';

export default {
  name: 'AdminComponents',

  components: {
    HeaderComponents,
    SidebarComponents
  },
  data(){
    return {
      userName: "",
      email: "",
      password: "",
      phoneNumber: "",

      updateuserName: "",
      updateemail: "",
      updatepassword: "",
      updatephoneNumber: "",

      Admin_ID: null,
      admins: [],
      searchQuery: ""
    }

  },
  created(){
    this.ShowAdmins();
  },
  methods:{

    //Function Search Admin
    async ShowAdmins(){
      try{
        const response = await axios.get('http://localhost:3000/api/select-admin');
        if(Array.isArray(response.data)){
          this.admins = response.data;
        }else{
          console.error('Invaild error', response.data);
        }
      }catch (error){
        console.error('Error Admins', error)
      }
    },

    //Function Create Admin
    async CreateAdmin(){
      try{
        const response = await axios.post('http://localhost:3000/api/create-admin',{
          userName: this.userName,
          email: this.email,
          password: this.password,
          phoneNumber: this.phoneNumber

          
        });
        console.log(response.data);

        this.ShowAdmins();
        this.ShowSuccessMessage();
        this.ResetAdmin_Form();
      }catch (error){
        console.error('Error create admin',error);
        this.ShowErrorMessage();
      }
   },

    // Function Reset Admin Form

    async ResetAdmin_Form(){
      this.userName = "",
      this.email = "",
      this.password = "",
      this.phoneNumber = ""
    },

    async SearchAdmin(){
      const params = new URLSearchParams();
      params.append('userName', this.searchQuery,
                    'email',this.searchQuery,
                    'phoneNumber', this.searchQuery
      );

      fetch(`http://localhost:3000/api/search-admin?${params.toString()}`)
      .then((response) => response.json())
      .then((data) => {
        this.admins = data;
      })
      .catch((error) => {
        console.error('Search error', error);
      });
    },

    async ConfirmDelete(Admin_ID){
      Swal.fire({
        title: 'ຕ້ອງການລົບແທ້ ຫຼື ບໍ?',
        text: 'ທ່ານແນ່ໃຈບໍ ທີຈະລົບລະຫັດທີ່:'+ Admin_ID,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'ຍົກເລີກ',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'ຢືນຢັນ',
      }).then((result) => {
        if(result.isConfirmed){
          this.DeleteAdmin(Admin_ID);
        }
      });
    },

    async DeleteAdmin(Admin_ID){
      try{
        const response = await axios.delete(`http://localhost:3000/api/delete-admin/${Admin_ID}`);
        console.log(response.data);
        Swal.fire({
          title: 'ລົບລ້າງ!',
          text: 'ຂໍ້ມູນໄດ້ຖືກລົບສຳເລັດແລ້ວ',
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          }

        }).then(() => {
          this.ShowAdmins();
        });
      }catch(error){
        console.error('Error Deleting Admin', error);
        Swal.fire({
          title: 'ລົບລ້າງບໍ່ໄດ້!',
          text: 'ຂໍ້ມູນທີ່ຕ້ອງການລົບເກີດຂໍ້ຜິດພາດ!',
          icon:'error',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () =>{
            Swal.showLoading();
          }
        });
      }
    },

    //FunctionShowAdminItem

    async ShowAdminItem(Admin_ID){
      this.Admin_ID = Admin_ID;
      try{
        const response = await axios.get(`http://localhost:3000/api/admin/${Admin_ID}`);
        this.updateuserName = response.data.userName,
        this.updateemail = response.data.email,
        this.updatepassword = "",
        this,this.updatephoneNumber = response.data.phoneNumber
      }catch(error){
        console.error(error.response.data);
      }
    },

    //Function Update Admin

    async UpdateAdmin(){
      try{
        const response = await axios.put(`http://localhost:3000/api/update-admin/${this.Admin_ID}`, {
          userName : this.updateuserName,
          email : this.updateemail,
          password : this.updatepassword,
          phoneNumber : this.updatephoneNumber
        });
        console.log(response.data);
        this.$router.push('/admin');
        // alert('Update Admin Success');
        this.ShowUpdateMessage();
        this.ShowAdmins();

      }catch(error){
        console.error(error.response.data);
        // alert('Failed to update Admin');
        this.ShowErrorMessage();
      }
    },

    //ShowUpdateMessage
    async ShowUpdateMessage(){
        Swal.fire({
          title: " ແກ້ໄຂສຳເລັດ",
          text: "ຂໍ້ມູນຖືກແກ້ໄຂສຳເລັດແລ້ວ",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,

          didOpen: () =>{
            Swal.showLoading();
          }
        });
      },

    //ShowUpdateMessage
    async ShowSuccessMessage(){
        Swal.fire({
          title: " ບັນທຶກສຳເລັດ",
          text: "ຂໍ້ມູນຖືກບັນທຶກສຳເລັດແລ້ວ",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,

          didOpen: () =>{
            Swal.showLoading();
          }
        });
      },

      // ShowErrorMessage
      async ShowErrorMessage(){
        Swal.fire({
          title: " ເກິດຂໍ້ຜິດພາດ",
          text: "ກະລຸນາລອງໃໝ່ອີກຄັ້ງ",
          icon: "warning",
          timer: 2000,
          timerProgressBar: true,

          didOpen: () =>{
            Swal.showLoading();
          }
        });
      },


  }
  
}
</script>

