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
            <h1 class="m-0"><b class="text-primary"><marquee behavior="" direction="">ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ລະບົບ</marquee></b></h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><router-link to="/dashboard" href="#">ໜ້າຫຼັກ</router-link></li>
              <li class="breadcrumb-item active">Modules</li>
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
                  <button @click="SearchModule" class="btn btn-success ml-2"><i class="fas fa-search"></i></button>
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
            <h3 class="text-center"><b>ຟອມເພີ່ມໂມດຸນ</b></h3>
            <!-- general form elements -->
            <div class="card card-success">
              <div class="card-header">
                <h3 class="card-title">ເພີ່ມໂມດຸນ</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="CreateModule">
                <div class="card-body">
                  <div class="row">
                    <div class="form-group ml-5 mb-3">
                    <label for="exampleInputEmail1">ຊື່: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" required v-model="moduleName" id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                  </div>
                   
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="reset" class="btn btn-danger"><i class="fas fa-times mr-1"></i>ຍົກເລີກ</button>&nbsp;&nbsp;<button type="submit" class="btn btn-success"><i class="fas fa-print mr-1"></i> ບັນທຶກ</button>
                </div>
              </form>
            </div>
            <!-- /.card -->

            
            <!-- /.card -->

          </div>
          <div class="col-md-6">
            
            <h3 class="text-center text-success"><b>ລາຍຊື່ໂມດຸນ</b></h3>
            <div class="overflow-auto">
              <table class="table table-striped">
              <thead>
                <tr>
                  <th>ລຳດັບ</th>
                  <th>ຊື່</th>
                  <th>ສ້າງວັນທີ</th>
                  <th>ອັບເດດວັນທີ</th>
                  <th>ປຸ່ມຄຳສັ່ງ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="none_data">
                  <td class="text-danger text-bold">ຂໍອະໄພ ຂໍ້ມູນທີ່ຄົ້ນຫາບໍ່ພົບໃນລະບົບ</td>
                </tr>
                <tr v-else v-for="modules in modules_s" :key="modules.id">
                  <td>{{ modules.id }}</td>
                  <td><b>{{ modules.moduleName }}</b></td>
                  <td><b class="text-success">{{ modules.created_at }}</b></td>
                  <td><b class="text-danger">{{ modules.updated_at }}</b></td>
                  <td>
                    <button @click="ShowModuleItem(modules.id)" class="btn btn-warning" data-toggle="modal" data-target="#modal-info"><i class="fas fa-edit"></i></button>
                    <button @click="ConfirmDelete(modules.id)" href="" class="btn btn-danger"><i class="fas fa-times"></i></button>
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
              <h4 class="modal-title">ຟອມແກ້ໄຂຂໍ້ມູນໂມດຸນ</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form enctype="multipart/form-data" @submit.prevent="UpdateModule">
              <div class="modal-body">
              <div class="row">
                <div class="form-group ml-3 mb-3">
                    <label for="exampleInputEmail1">ຊື່: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" required v-model="updatemoduleName" id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                  </div>
                  
              </div>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-success" data-dismiss="modal"> <i class="fas fa-times mr-1"></i> ຍົກເລີກ</button>
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
    import axios from 'axios';
    import Swal from 'sweetalert2';
    import HeaderComponents from './includes/HeaderComponents.vue';
    import SidebarComponents from './includes/SidebarComponents.vue';

    export default {
        name: "ModuleComponents",
        components: {
            HeaderComponents,
            SidebarComponents
        },

        data(){
            return{
                moduleName: "",

                updatemoduleName: "",
                searchQuery: "",
                modules_s : [],
                Module_ID : null,
                none_data: false
            }
        },
        //Function Create Module
        created(){
            this.ShowModules();
        },
        methods:{

            //Function Search Module
            async ShowModules(){
                try{
                    const response = await axios.get('http://localhost:3000/api/select-module');
                    if(Array.isArray(response.data)){
                    this.modules_s = response.data;
                    }else{
                    console.error('Invaild error', response.data);
                    }
                }catch (error){
                    console.error('Error Modules', error)
                }
            },

            //Function Create Module
            async CreateModule(){
                try{
                    const response = await axios.post('http://localhost:3000/api/create-module',{
                    moduleName: this.moduleName,

                    
                    });
                    console.log(response.data);

                    this.ShowModules();
                    this.ShowSuccessMessage();
                    this.ResetModule_Form();
                }catch (error){
                    console.error('Error create Module',error);
                    this.ShowErrorMessage();
                }
            },

            // 

            async SearchModule(){
                const params = new URLSearchParams();
                params.append('moduleName', this.searchQuery
                );

                fetch(`http://localhost:3000/api/search-module?${params.toString()}`)
                .then((response) => response.json())
                .then((data) => {
                    this.modules_s = data;
                    this.none_data = data.length === 0;
                })
                .catch((error) => {
                    console.error('Search error', error);
                    this.none_data = true;
                });
            },

            // Function Reset Module Form

            async ResetModule_Form(){
                this.moduleName = ""
            },

            async ConfirmDelete(Module_ID){
                Swal.fire({
                    title: 'ຕ້ອງການລົບແທ້ ຫຼື ບໍ?',
                    text: 'ທ່ານແນ່ໃຈບໍ ທີຈະລົບລະຫັດທີ່:'+ Module_ID,
                    icon: 'warning',
                    showCancelButton: true,
                    cancelButtonText: 'ຍົກເລີກ',
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'ຢືນຢັນ',
                }).then((result) => {
                    if(result.isConfirmed){
                    this.DeleteModule(Module_ID);
                    }
                });
            },

            async DeleteModule(Module_ID){
                try{
                    const response = await axios.delete(`http://localhost:3000/api/delete-module/${Module_ID}`);
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
                    this.ShowModules();
                    });
                }catch(error){
                    console.error('Error Deleting Module', error);
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

            async ShowModuleItem(Module_ID){
                this.Module_ID = Module_ID;
                try{
                    const response = await axios.get(`http://localhost:3000/api/module/${Module_ID}`);
                    this.updatemoduleName = response.data.moduleName
                }catch(error){
                    console.error(error.response.data);
                }
            },

            //Function Update Module

            async UpdateModule(){
                try{
                    const response = await axios.put(`http://localhost:3000/api/update-module/${this.Module_ID}`, {
                    moduleName : this.updatemoduleName,
                    });
                    console.log(response.data);
                    this.$router.push('/modules');
                    // alert('Update Module Success');
                    this.ShowUpdateMessage();
                    this.ShowModules();

                }catch(error){
                    console.error(error.response.data);
                    // alert('Failed to update Module');
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

            //ShowSuccessMessage
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
        },

    }
    
</script>