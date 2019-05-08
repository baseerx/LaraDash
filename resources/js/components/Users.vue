<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">{{cardName}}</div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">Users Table</h3>

                                        <div class="card-tools">
                                            <button name="add_user" id="add_user" data-toggle="modal"
                                                    data-target="#addUserModal" class="btn btn-sm">
                                                <i class="fas fa-2x fa-user-plus green"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <!-- /.card-header -->
                                    <div class="card-body table-responsive p-0">
                                        <table class="table table-hover">
                                            <tr class="text-center">
                                                <th>ID</th>
                                                <th>User</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Modify</th>
                                            </tr>
                                            <tr class="text-center">
                                                <td>183</td>
                                                <td>John Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span class="tag tag-success">Approved</span></td>
                                                <td>
                                                    <a href="#">
                                                        <i class="fas fa-lg fa-edit">

                                                        </i>
                                                    </a>
                                                    <a href="#" class="pl-3">
                                                        <i class="fas fa-lg fa-trash red">

                                                        </i>
                                                    </a>
                                                </td>
                                            </tr>

                                        </table>
                                    </div>
                                    <!-- /.card-body -->
                                </div>
                                <!-- /.card -->
                            </div>
                        </div><!-- /.row -->
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="addUserModal" tabindex="-1" role="dialog" aria-labelledby="addUserModalLabel"
             aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addUserModalLabel">Add User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="createUser">
                        <div class="modal-body">
                            <div class="form-group">
                                <input v-model="form.name" type="text" name="name"
                                       placeholder="Name" autocomplete="off"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                            <div class="form-group">
                                <input v-model="form.email" type="text" name="email"
                                       placeholder="Email Address" autocomplete="off"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                                <has-error :form="form" field="email"></has-error>
                            </div>

                            <div class="form-group">
                                <input v-model="form.password" type="password" name="password"
                                       placeholder="Password"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                                <has-error :form="form" field="password"></has-error>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger btn-md" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-info btn-md">Create</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: new Form({
                    name: '',
                    email: '',
                    password: ''
                }),
                cardName: "User Data Table"
            }
        },
        created() {
            console.log('Component mounted.')
        },
        methods:
            {
                addUser() {
                    alert("You are about to add new user");
                },
                createUser () {
                    // Submit the form via a POST request
                    this.form.post('api/user');
                }
            }

    }
</script>
