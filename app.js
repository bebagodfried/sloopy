/**
 * name: sloop - string repeater,
 * version: 1.0.0,
 * author: Beba Godfried <me@bebagodfried.com>
 * license: CC BY 4.0, MIT - (c) 2022
 */

let appName = 'sloop'

let options = selectId('loop_options');
let repeats = selectId('repeats');

let optionBox = {
  title : `${appName} - Repeat option`,
  href  : 'option.html'
}

let err_string = {
  title : `err_string`,
  text  : `Can't repeat empty string.`,
  classList: ['text-danger'],
  style : 'dark',
  header: false
}

let err_repeat = {
  title: `err_repeat`,
  text: `Please set a repeater.`,
  classList: ['text-danger'],
  style: 'dark',
  header: false
}

//
if (options) {
  options.onclick = function () {
    modalbox(optionBox)
  }
}

//
let sloop_form = selectId('sloop_form');

if (sloop_form) {
    // 
    let s = sessionStorage.getItem('sloop_string');

    if (s) {
      sloop_form['s'].setAttribute("value", s)
    }

    sloop_form.addEventListener('submit', function (e) {
      e.preventDefault();

      let string = sloop_form['s'].value;

      if (!string) {
        //
        modalbox(err_string)

        setTimeout(() => {
          drop(['#err_string'])
        }, 1700);
      } else if (!sessionStorage.getItem('sloop_repeat')) {
        //
        modalbox(err_repeat)

        setTimeout(() => {
          drop(['#err_repeat'])
        }, 1700);
      } else {  
        //    
        sessionStorage.setItem('sloop_string', string);

        location.href = 'generator.html'
      }

    })
  }

//
let sloop_option = selectId('sloop_option');
if (sloop_option) {
    // 
    let r = sessionStorage.getItem('sloop_repeat');

    if (r) {
      sloop_option['repeats'].setAttribute("value", r)
    }

    sloop_option.onsubmit = (e) => {
      e.preventDefault();
    }

    sloop_option.addEventListener('change', function (e) {
      e.preventDefault();

      let n = sloop_option['repeats'].value;

      sessionStorage.setItem('sloop_repeat', n);
    })
  }

