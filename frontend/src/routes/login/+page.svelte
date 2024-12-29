<script lang="ts">
    let email = '';
    let password = '';
    let errorMessage = '';
    let isLogin = false;
    
    let users =[
        {
            "email": "user@gm.com",
            "password": "123"
        },
        {
            "email": "user1@example.com",
            "password": "password123"
        },
        {
            "email": "user2@example.com",
            "password": "mypassword456"
        },
        {
            "email": "user3@example.com",
            "password": "secure789"
        },
        {
            "email": "user4@example.com",
            "password": "testpass000"
        }       
    ]

    function LoginBtn(){
        isLogin = true
        const user = users.find(
            (u) => u.email === email && u.password === password
        );
        if (!user){
            errorMessage = "Email does not exist";
        }else{
            if ( user.password != password){
                errorMessage = "Invalid password";

            }else{
                errorMessage = "OK";
            }

        }

    }

    const handleLogin = (event) => {
   
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      errorMessage = '';
      window.location.href = 'routes/register/+page.svelte'; // Chuyển hướng tới trang chào mừng
    } else {
      errorMessage = 'Invalid email or password. Please try again.';
    }
  };

</script>

<div class="h-screen bg-primary from-blue-600 to-cyan-300 flex justify-center items-center w-full">
        
    <form method='POST' action='#'>
        <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm">
            <div class="space-y-4">
                <h1 class="text-center text-2xl font-semibold text-gray-600">Login</h1>
                <hr>
            <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input class="pl-2 outline-none border-none w-full" type="email" name="email" bind:value={email} placeholder="Email" required/>

            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                <input class="pl-2 outline-none border-none w-full" type="password" name="password" bind:value={password} id="" placeholder="Password" required/>
                
            </div>
            </div>

            <button type="submit" value="login" id="login" on:click= {LoginBtn} class="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">Login</button>
            {#if isLogin}
                <p class="error">{errorMessage}</p>
            {/if}
            <hr>
            <div class="flex justify-center items-center mt-4">
                <p class="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                    <span class="ml-2">You don't have an account?<a href="/register" class="text-xs ml-2 text-blue-500 font-semibold">Register now &rarr;</a>
                    </span>
                </p>
            </div>
        </div>
        <div class="pt-6 text-base font-semibold leading-7">
            <p class="font-sans text-red-500 text-md hover:text-red-800">
            <a href="/" class="absolute">&larr; Home</a>
            </p>
        </div>
    </form>
</div>