export default{
    bind: function (el, binding, vnode) {
        function test(e){
            if(binding.expression){
                binding.value(e);
            }
        }
        el._test_= test;
        document.addEventListener('input',el._test_);
    },

    unbind: function (el, binding, vnode) {
        document.removeEventListener('input', el._test_);
        delete el._test_;
    }
};