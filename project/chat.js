//    http://cryptojs.altervista.org/api/functions_cryptography.js
    var chat = document.getElementById('chat'),
        msg = document.getElementById('msg');
        msg_auth = document.getElementById('msg_auth');
        auth = document.getElementById('auth');
        encrypt = document.getElementById('encrypt');
        msg_key = document.getElementById("msg_key");
        elem = document.getElementById("elem");
//        msg1 = document.getElementById('msg1');
//        decrT = document.getElementById('decrT');
//        passP = document.getElementById('passP');
//        but = document.getElementById('but2');
//        rsa_t = document.getElementById('rsa_t');
//        rsa_e = document.getElementById('rsa_e');
    msg_auth.focus();
    var Crypt = new Crypt;
//DSA MAC !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    showSmiles();


    
    /*--------------------------------------------------Encrypt AES, md5,sha-256-----------------------
    elem.onclick = function() {  
        var pass = msg1.value;
        var s = msg.value;
        var helper = select.value;
        msg.value = '';
        switch(helper){
            case 'AES':
                var ciphertext = Crypt.AES.encrypt(s,pass);
                writeLine(s);
                socket.send(ciphertext);
                break;
            case 'MD5':
                var ciphertext = Crypt.HASH.md5(s);
                writeLine(ciphertext);
                socket.send(ciphertext);
                break;
            case 'SHA-256':
                var ciphertext = Crypt.HASH.sha256(s);
                writeLine(ciphertext);
                socket.send(ciphertext);
                break;
            default: break;}
       };
*/    
      var public = new BigInteger("asdad", 16);
      var public_user1;
      var public_user2;
      var private_user1;
      var private_user2;
      var x = 0;
      var help = [];
      msg.addEventListener('keydown', function(event) { 

      if (event.keyCode === 13) {
        if(x = 1){
        var s = msg.value;
        msg.value = '';
        writeLine(msg_auth.value +":" +s);
        socket.send(msg_auth.value +":"+ s);
      }
      if(x = 0){
        s = msg.value;
        k = msg.key;
        var ciphertext = Crypt.AES.encrypt(msg.value,msg_key.value);
        msg.value = '';
        writeLine(msg_auth.value +":" +ciphertext+x);
        socket.send(msg_auth.value +":"+ ciphertext);
      }
      }
    });
      elem.onclick = function() {  
        var pass = msg_key.value;
        var s = msg.value;
        msg.value = '';
                var ciphertext = CryptoJS.HmacMD5(s, pass);
                writeLine(ciphertext);
                socket.send(ciphertext);
              
       };
      var save =[];
      msg_auth.addEventListener('keydown', function(event) {       
      if (event.keyCode === 13) {
        if(findel(save,msg_auth.value)){}
        else save[save.length] = msg_auth.value;
      }

    });
      auth.onclick = function(){
        var x=0;
        writeLine("You are using Encrypted chat");
        if (msg_auth.value = "user1") {
        public_user1 = new BigInteger(str_rand(),16);
        private_user2 = new BigInteger(str_rand(),16);
        public_user2 = public_user1.mod(private_user2);
        private_user1 = public_user2.mod(public_user1);
      }

        if(public_user2 = private_user1){
                help[help.length] = public_user2.toString(16);
          if(msg_auth.value == "user1" || msg_auth.value == "user2")
            msg_key.value = help[0];
            
        }
      
      }
      
      

      /*      --------------------------------------Decrypt AES-------------------------------
      but.onclick = function(){  if (passP.value!=''){
        var help = passP.value;
        var decrypt = Crypt.AES.decrypt(decrT.value,help);
        writeLine(decrypt);
      }
      else alert('Ключ не верен');
      }
      var public;
      var public_h;
      /*
      /* -----------------------------------------RSA-encrypt----------------------------------------
      but3.onclick = function(){  
        var secret = rsa_t.value;
        var encryptor = rsa_e.value;
        public = new BigInteger(secret, encryptor);
        writeLine("Your public :" + public.toString(16));

      }
      but4.onclick = function(){  
        var secret = rsa_t.value;
        var encryptor = rsa_e.value;
        public_h = new BigInteger(secret, encryptor);
        writeLine("Your public :" + public_h.toString(16));

      }
      but5.onclick = function(){
        var secret = public.mod(public_h);
        writeLine("Your secret :" + secret.toString(16));
      }
      */
      /*-------------------------------gen RSA-random ----------------------------------
      but3.onclick = function(){  
        public_h = str_rand();
        public_s = str_rand();
        public = new RSADoPublic();
        writeLine("Your public :" + public.toString(16));

      }
      but4.onclick = function(){
        var key = RSA.getPublicKey(str_rand);
        var secret = RSA.encrypt(public, key);
        writeLine("Your secret :" + secret.toString(16));
      }
    */
    function showSmiles() {
        var str = '<img id="img" src="images/img.gif" alt="img"> <img id="img2" src="images/img2.gif" alt="img"> <img id="img3" src="images/img3.gif" alt="img"> <img id="img4"src="images/img4.gif" alt="img"><img id="Kappa" src="images/Kappa.gif" alt="img"> ';
        var img = document.getElementById('images');
        img.innerHTML = str;
        
        $(document).ready(function() {
            $('img').on("click", function () {
                var tt = $(this).attr("id");
                
                writeSmile("##" + tt);
                socket.send("##" + tt);               
            });
        });
    }
    function str_rand() {
        var result       = '';
        var words        = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        var max_position = words.length - 1;
            for( i = 0; i < 15; ++i ) {
                position = Math.floor ( Math.random() * max_position );
                result = result + words.substring(position, position + 1);
            }
        return result;
    }
    function findel(array,element){
      for(var i = 0; i<array.length;i++){
        if(array[i] == element){
          alert("this login is used");
          msg_auth.value = '';
        }

      }

    }
    function writeLine(text) {
      var line = document.createElement('div');
      line.innerHTML ='<p>'+ text + '</p>';
      chat.appendChild(line);
    }
    function writeELine(text,pass) {
        var ciphertext = Crypt.AES.encrypt(text,pass); 
      var line = document.createElement('div');
      line.innerHTML = '<p>' + ciphertext + '</p>';
      chat.appendChild(line);
    }
    function writeSmile(smileID) { 
        var smile = document.createElement('div');
        smileID = smileID.substring(2);        
        smile.innerHTML = '<img src="images/' + smileID + '.gif" alt="img">';
        chat.appendChild(smile);     
    }
    function writeESmile(smileID) { 
        var ciphertext = Crypt.AES.encrypt(smileID,pass);
        var smile = document.createElement('div');
        ciphertext = ciphertext.substring(2);        
        smile.innerHTML = '<img src="images/' + ciphertext + '.gif" alt="img">';
        chat.appendChild(smile);     
    }
    //var socket = new WebSocket('ws://127.0.0.1/chat');
    var socket = new WebSocket('ws://127.0.0.1/chat');

    socket.onopen = function() {
      writeLine('connected');      
    };

    socket.onclose = function() {
      writeLine('closed');
    };

    socket.onmessage = function(event) {
        if (event.data.includes('##img', 0))
            writeSmile(event.data);
       // if(msg1!='')writeELine(event.data);
        else  if(event.data.length != 16) writeLine(event.data);
        if(event.data.search("user1") == 0)
          msg_auth.value = "user2";
        if(event.data.search("user2") == 0){
          if(msg_auth.value != "user1")
          msg_auth.value = "user3";
        }
        
    };  
