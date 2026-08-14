document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Scroll Progress Indicator ---
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.prepend(progressBar);
    }

    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        progressBar.style.width = scrolled + '%';
    });

    // --- 2. Navbar Scroll & Background Effect ---
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- 3. Mobile Hamburger Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            navLinks.classList.toggle('open');
            const isOpen = navLinks.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close menu when clicking outside or clicking a link
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('open');
                navLinks.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                navLinks.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // --- 4. Back-to-Top Button ---
    let backToTopBtn = document.querySelector('.back-to-top');
    if (!backToTopBtn) {
        backToTopBtn = document.createElement('button');
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.setAttribute('aria-label', 'Back to top');
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(backToTopBtn);
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- 5. Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 6. Fade In on Scroll (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-padding').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });

    // --- 7. FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                if (otherAnswer) otherAnswer.style.maxHeight = null;
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                if (answer) answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // --- 8. Modal Event Listener Attachments (replaces inline onclick) ---
    const modalCloseBtn = document.getElementById('modalCloseButton');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => {
            if (typeof closeModal === 'function') {
                closeModal();
            }
        });
    }

    // --- 9. Animated Impact Stats Counter ---
    const statCards = document.querySelectorAll('.stat-number');
    if (statCards.length > 0) {
        let animated = false;
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;
                    statCards.forEach(card => {
                        const target = parseInt(card.getAttribute('data-target'), 10);
                        const suffix = card.getAttribute('data-suffix') || '';
                        let count = 0;
                        const duration = 1500; // 1.5s
                        const stepTime = Math.max(Math.floor(duration / (target || 1)), 20);

                        const timer = setInterval(() => {
                            count += Math.ceil(target / (duration / stepTime));
                            if (count >= target) {
                                count = target;
                                clearInterval(timer);
                            }
                            card.innerText = count + suffix;
                        }, stepTime);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }
    }

    // --- 10. Contact Form Validation & Handler ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const isArabic = document.documentElement.lang === 'ar';

        // Validation messages
        const msgs = {
            nameRequired:  isArabic ? 'يرجى إدخال الاسم بالكامل' : 'Please enter your full name.',
            nameMin:       isArabic ? 'الاسم يجب أن يكون حرفين على الأقل' : 'Name must be at least 2 characters.',
            emailRequired: isArabic ? 'يرجى إدخال البريد الإلكتروني' : 'Please enter your email address.',
            emailInvalid:  isArabic ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address.',
            phoneInvalid:  isArabic ? 'يرجى إدخال رقم هاتف صحيح (مثال: +201001234567)' : 'Please enter a valid phone number (e.g. +201001234567).',
            msgRequired:   isArabic ? 'يرجى كتابة رسالتك' : 'Please enter your message.',
            msgMin:        isArabic ? 'الرسالة يجب أن تكون 10 أحرف على الأقل' : 'Message must be at least 10 characters.',
            sending:       isArabic ? 'جاري الإرسال...' : 'Sending...',
            success:       isArabic ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.' : 'Your message has been sent successfully! We will contact you soon.',
            genericError:  isArabic ? 'يرجى تصحيح الأخطاء أعلاه' : 'Please fix the errors above.'
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const phoneRegex = /^\+?[\d\s\-()]{7,15}$/;

        // Helper: show inline error below a field
        function showFieldError(field, message) {
            clearFieldError(field);
            field.classList.add('error');
            const errorEl = document.createElement('span');
            errorEl.className = 'field-error';
            errorEl.textContent = message;
            field.parentElement.appendChild(errorEl);
        }

        // Helper: clear inline error for a field
        function clearFieldError(field) {
            field.classList.remove('error');
            const existing = field.parentElement.querySelector('.field-error');
            if (existing) existing.remove();
        }

        // Real-time: clear error when user starts typing
        ['contactName', 'contactEmail', 'contactPhone', 'contactMessage'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('input', () => clearFieldError(el));
            }
        });

        // Validate all fields, returns true if valid
        function validateForm() {
            let isValid = true;
            const nameEl    = document.getElementById('contactName');
            const emailEl   = document.getElementById('contactEmail');
            const phoneEl   = document.getElementById('contactPhone');
            const messageEl = document.getElementById('contactMessage');

            // Name validation
            const name = nameEl?.value.trim() ?? '';
            if (!name) {
                showFieldError(nameEl, msgs.nameRequired);
                isValid = false;
            } else if (name.length < 2) {
                showFieldError(nameEl, msgs.nameMin);
                isValid = false;
            } else {
                clearFieldError(nameEl);
            }

            // Email validation
            const email = emailEl?.value.trim() ?? '';
            if (!email) {
                showFieldError(emailEl, msgs.emailRequired);
                isValid = false;
            } else if (!emailRegex.test(email)) {
                showFieldError(emailEl, msgs.emailInvalid);
                isValid = false;
            } else {
                clearFieldError(emailEl);
            }

            // Phone validation (optional — only validate if filled)
            const phone = phoneEl?.value.trim() ?? '';
            if (phone && !phoneRegex.test(phone)) {
                showFieldError(phoneEl, msgs.phoneInvalid);
                isValid = false;
            } else {
                clearFieldError(phoneEl);
            }

            // Message validation
            const message = messageEl?.value.trim() ?? '';
            if (!message) {
                showFieldError(messageEl, msgs.msgRequired);
                isValid = false;
            } else if (message.length < 10) {
                showFieldError(messageEl, msgs.msgMin);
                isValid = false;
            } else {
                clearFieldError(messageEl);
            }

            return isValid;
        }

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const toast = document.getElementById('contactToast');
            const submitBtn = contactForm.querySelector('button[type="submit"]');

            // Hide any previous toast
            if (toast) toast.className = 'contact-toast';

            if (!validateForm()) {
                if (toast) {
                    toast.className = 'contact-toast error';
                    toast.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + msgs.genericError;
                }
                return;
            }

            // Simulate smooth submit state
            if (submitBtn) {
                submitBtn.disabled = true;
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + msgs.sending;

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    contactForm.reset();
                    if (toast) {
                        toast.className = 'contact-toast success';
                        toast.innerHTML = '<i class="fas fa-check-circle"></i> ' + msgs.success;
                    }
                }, 1000);
            }
        });
    }
});
