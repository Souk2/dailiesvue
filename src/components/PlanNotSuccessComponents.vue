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
              <li class="breadcrumb-item active">Plan</li>
            </ol>
          </div><!-- /.col -->
        </div>
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-8">
            <div class="d-flex justify-content-between">
                <div class="d-flex mb-2">
                  <input type="search" required v-model="searchQueryname" class="form-control" placeholder="ຊອກຫາແຜນການ...">
                  <button @click="SearchPlans" class="btn btn-danger ml-2"><i class="fas fa-search"></i></button>
                </div>
                <div class="d-flex mb-2">
                  <input type="search" required v-model="searchQuerypercent" class="form-control" placeholder="ຊອກຫາເປີເຊັນ...">
                  <button @click="SearchPlans" class="btn btn-danger ml-2"><i class="fas fa-search"></i></button>
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
            <div class="col-md-2"></div>
          <div class="col-md-8">
            
            <h3 class="text-center text-danger"><b>ລາຍຊື່ແຜນການຍັງບໍ່ສຳເລັດ</b></h3>
            <div class="overflow-auto">
              <table class="table table-striped">
              <thead>
                <tr>
                  <th>ລຳດັບ</th>
                  <th>ຊື່</th>
                  <th>ເປີເຊັນ</th>
                  <th>ເຄື່ອນໄຫວ</th>
                  <th>ສະຖານະ</th>
                  <th>ສ້າງວັນທີ</th>
                  <th>ອັບເດດວັນທີ</th>
                  <th>ປຸ່ມຄຳສັ່ງ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="none_data">
                  <td class="text-danger text-bold">ຂໍອະໄພ ຂໍ້ມູນທີ່ຄົ້ນຫາບໍ່ພົບໃນລະບົບ</td>
                </tr>
                <tr v-else v-for="(plan, index) in plans" :key="plan.id">
                  <td>{{ index + 1 }}</td>
                  <td class="text-bold">{{ plan.name }}</td>
                  <td class="text-bold text-success">{{ plan.percent }}%</td>
                  <td class="text-bold text-danger">{{ plan.active }}%</td>
                  <td :class="plan.status === 0 ? 'text-danger' : 'text-success'">
                    <b>{{  plan.status === 0 ? 'ຍັງບໍ່ສຳເລັດ' : 'ສຳເລັດແລ້ວ'  }}</b>
                  </td>
                  <td><b class="text-success">{{ plan.created_at }}</b></td>
                  <td><b class="text-danger">{{ plan.updated_at }}</b></td>
                  <td>
                    <button @click="ShowPlanNotSuccesssItem(plan.id)" class="btn btn-warning" data-toggle="modal" data-target="#modal-info"><i class="fas fa-edit"></i></button>
                    <button @click="ConfirmDelete(plan.id)" href="" class="btn btn-danger"><i class="fas fa-times"></i></button>
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
        <div class="modal-dialog modal-lg">
          <div class="modal-content ">
            <div class="modal-header bg-info">
              <h4 class="modal-title">ຟອມແກ້ໄຂຂໍ້ມູນແຜນການ</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form enctype="multipart/form-data" @submit.prevent="UpdatePlan">
              <div class="modal-body">
              <div class="row">
                <div class="form-group ml-3 mb-3">
                    <label for="exampleInputEmail1">ຊື່: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" required v-model="updatename" id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                  </div>
                  <div class="form-group ml-3 mb-3">
                    <label for="exampleInputEmail1">ເປີເຊັນ: <span class="text-danger">*</span></label>
                    <input type="number" class="form-control" required v-model="updatepercent" id="exampleInputEmail1" placeholder="%">
                  </div>
                  <div class="form-group ml-3 mb-3">
                    <label for="exampleInputEmail1">ເຄື່ອນໄຫວ: <span class="text-danger">*</span></label>
                    <input type="number" class="form-control" required v-model="updateactive" id="exampleInputEmail1" placeholder="%">
                  </div>
                  <div class="form-group ml-3 mb-3">
                    <label for="exampleInputEmail1">ສະຖານະ: <span class="text-danger">*</span></label>
                    <select name="" id="" class="form-control" required v-model="updatestatus">
                      <option value="0">ຍັງບໍ່ສຳເລັດ</option>
                      <option value="1">ສຳເລັດແລ້ວ</option>
                    </select>
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
  name: 'PlanNotSuccessComponents', // sone ti hai runter hu

  components: {
    HeaderComponents,
    SidebarComponents
  },
  props:{
    plan: Object
  },
  computed: {
    statusClass(){
      return this.plan.status === 0 ? 'text-danger' : 'text-success';
    },
    statusText(){
      return this.plan.status === 0 ? 'not success' : 'success';
    },
  },


  data(){
    return {
      name: "",
      percent: "",
      status: "",

      updatename: "",
      updatepercent: "",
      updateactive: "",
      updatestatus: '',

      Plan_ID: null,
      plans: [],
      searchQueryname: "",
      searchQuerypercent: "",

    }

  },
  created(){
    this.ShowPlanNotSuccesss();
  },
  methods:{

    //Function Search Plans
    async ShowPlanNotSuccesss(){
      try{
        const response = await axios.get('http://localhost:3000/api/select-plan-not-success');
        if(Array.isArray(response.data)){
          this.plans = response.data;
        }else{
          console.error('Invaild error', response.data);
        }
      }catch (error){
        console.error('Error Admins', error)
      }
    },

    async SearchPlans() {
      const params = new URLSearchParams();
       if (this.searchQueryname) {
           params.append('name', this.searchQueryname);
       }
       if (this.searchQuerypercent) {
           params.append('percent', this.searchQuerypercent);
       }

       fetch(`http://localhost:3000/api/search-plan?${params.toString()}`)
          .then((response) => response.json())
          .then((data) => {
          this.plans = data;
          this.none_data = data.length === 0;
          })
          .catch((error) => {
          console.error('Search error', error);
          this.none_data = true;
          });
    },

    async ConfirmDelete(Plan_ID){
      Swal.fire({
        title: 'ຕ້ອງການລົບແທ້ ຫຼື ບໍ?',
        text: 'ທ່ານແນ່ໃຈບໍ ທີຈະລົບລະຫັດທີ່:'+ Plan_ID,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'ຍົກເລີກ',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'ຢືນຢັນ',
      }).then((result) => {
        if(result.isConfirmed){
          this.DeletePlan(Plan_ID);
        }
      });
    },

    async DeletePlan(Plan_ID){
      try{
        const response = await axios.delete(`http://localhost:3000/api/delete-plan/${Plan_ID}`);
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
          this.ShowPlanNotSuccesss();
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

    async ShowPlanNotSuccesssItem(Plan_ID){
      this.Plan_ID = Plan_ID;
      try{
        const response = await axios.get(`http://localhost:3000/api/plan/${Plan_ID}`);
        this.updatename = response.data.name,
        this.updatepercent = response.data.percent,
        this.updateactive= response.data.active,
        this.updatestatus = response.data.status
      }catch(error){
        console.error(error.response.data);
      }
    },

    //Function Update Plan

    async UpdatePlan(){
      try{
        const response = await axios.put(`http://localhost:3000/api/update-plan/${this.Plan_ID}`, {
          name : this.updatename,
          percent : this.updatepercent,
          active : this.updateactive,
          status : this.updatestatus
        });
        console.log(response.data);
        this.$router.push('/plannotsuccess');
        // alert('Update plan Success');
        this.ShowUpdateMessage();
        this.ShowPlanNotSuccesss();

      }catch(error){
        console.error(error.response.data);
        // alert('Failed to update plan');
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