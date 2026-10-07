<?php
/**
 * Sukhdeo Sahay Madheshwar Sahay Degree College — homepage.
 * One file: top bar, menu, hero, about, programmes, notices, footer.
 * No includes. Do not load includes/layout/head.php.
 */

function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

if (!function_exists('url')) {
    function url(string $path): string
    {
        $docRoot = str_replace('\\', '/', realpath($_SERVER['DOCUMENT_ROOT'] ?? '') ?: '');
        $appRoot = str_replace('\\', '/', realpath(__DIR__) ?: __DIR__);
        $base = '';
        if ($docRoot !== '' && str_starts_with($appRoot, $docRoot)) {
            $base = rtrim(substr($appRoot, strlen($docRoot)), '/');
        }
        return $base . '/' . ltrim($path, '/');
    }
}

if (!function_exists('college_name')) {
    function college_name(): string
    {
        return 'Sukhdeo Sahay Madheshwar Sahay Degree College';
    }
}
if (!function_exists('college_affiliation')) {
    function college_affiliation(): string
    {
        return 'Affiliated to N.P. University, Medininagar';
    }
}
if (!function_exists('college_address')) {
    function college_address(): string
    {
        return 'Tarhasi, Palamau, Jharkhand - 822118';
    }
}
if (!function_exists('college_hours')) {
    function college_hours(): string
    {
        return '10:30 AM – 5:00 PM';
    }
}

$logo = is_file(__DIR__ . '/assets/images/logo.png') ? url('/assets/images/logo.png') : '';
$messages = [
    [
        'name' => 'Dr. K.K. Sahay',
        'role' => 'Chairman, Indrani Braj Deo Sahay Foundation',
        'paragraphs' => [
            'Education is the means by which an area, a nation, and the world can change. With that belief, the Foundation started this college at Tarhasi in March 2010, first with Arts, then Commerce, and later Science.',
        ],
    ],
    [
        'name' => 'Dr. P.K. Verma',
        'role' => 'President, Governing Body',
        'paragraphs' => [
            'The college now teaches Humanities, Social Science, Science, and Commerce up to graduate level. Students are asked to stay close to their teachers and use the library and smart classroom fully.',
        ],
    ],
    [
        'name' => 'Sunil Kumar Sahay',
        'role' => 'Secretary',
        'paragraphs' => [
            'The college was established on 1 March 2010 so that students of Tarhasi block would not remain without higher education. It now runs from its academic and administrative building.',
        ],
    ],
    [
        'name' => 'Prof. Prabhakar Ojha',
        'role' => 'Professor In-Charge',
        'paragraphs' => [
            'The college has served the intellectual and career growth of students in this region and remains committed to their all-round development.',
        ],
    ],
];
$notices = [
    [
        'date' => '26 May 2026',
        'title' => 'Admission enquiry open for B.A., B.Sc. and B.Com.',
        'text' => 'Students may contact the college office for admission guidance, subject selection, and document requirements.',
    ],
    [
        'date' => '20 May 2026',
        'title' => 'College office timing',
        'text' => 'The college office is open from ' . college_hours() . '. Financial work closes after 2:30 PM.',
    ],
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= e(college_name()) ?></title>
    <style>
        :root {
            --navy: #181850;
            --gold: #e0b050;
            --gold-line: #c4922a;
            --ink: #141414;
            --paper: #ffffff;
            --line: #d5d2c8;
            --muted: #333333;
        }
        * { box-sizing: border-box; }
        body.home-page {
            margin: 0;
            background: var(--paper);
            color: var(--ink);
            font-family: "Segoe UI", system-ui, sans-serif;
            font-size: 1.05rem;
            line-height: 1.5;
        }
        a { color: var(--navy); }
        img { max-width: 100%; height: auto; }
        .wrap { width: min(1120px, calc(100% - 2rem)); margin-inline: auto; }
        .skip {
            position: absolute;
            left: 0.5rem;
            top: -3rem;
            background: #fff;
            color: var(--ink);
            padding: 0.4rem 0.7rem;
        }
        .skip:focus { top: 0.5rem; }

        .topbar {
            background: #fff;
            color: var(--navy);
            border-bottom: 3px solid var(--gold-line);
        }
        .topbar-inner {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 0.4rem 1.5rem;
            padding: 0.45rem 0;
            font-size: 0.92rem;
        }
        .topbar p { margin: 0; color: var(--ink); }

        .menu-header { background: var(--navy); color: #fff; }
        .menu-bar {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 0.8rem 1.2rem;
            padding: 0.75rem 0 0.35rem;
        }
        .brand {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            color: #fff;
            text-decoration: none;
        }
        .brand img { width: 72px; height: 72px; background: var(--navy); }
        .brand strong {
            display: block;
            color: #fff;
            font-family: Georgia, "Times New Roman", serif;
            font-weight: normal;
            font-size: 1.25rem;
            line-height: 1.25;
        }
        .brand small { display: block; margin-top: 0.2rem; color: #fff; }

        .site-nav {
            display: flex;
            flex: 1 1 100%;
            flex-wrap: wrap;
            align-items: center;
            gap: 0.1rem 0.15rem;
            padding-bottom: 0.45rem;
        }
        .site-nav > a,
        .nav-drop > summary {
            color: #fff;
            text-decoration: none;
            padding: 0.45rem 0.55rem;
            font-size: 0.95rem;
            cursor: pointer;
            list-style: none;
        }
        .nav-drop { position: relative; }
        .nav-drop > summary { display: flex; align-items: center; gap: 0.35rem; }
        .nav-drop > summary::-webkit-details-marker { display: none; }
        .nav-drop > summary::after {
            content: "";
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 5px solid #fff;
        }
        .nav-panel {
            position: absolute;
            z-index: 30;
            top: calc(100% - 1px);
            left: 0;
            min-width: 15.5rem;
            background: #fff;
            border: 1px solid var(--line);
            border-top: 3px solid var(--gold-line);
            padding: 0.35rem 0;
            box-shadow: 0 10px 24px rgba(20, 20, 20, 0.18);
        }
        .nav-drop--end .nav-panel { left: auto; right: 0; }
        .nav-panel a {
            display: block;
            color: var(--ink);
            text-decoration: none;
            padding: 0.45rem 0.9rem;
            background: #fff;
        }
        .nav-panel a:hover,
        .nav-panel a:focus-visible { background: #f4f1ea; color: var(--ink); }

        .hero {
            background: #fff;
            padding: 2.8rem 0 2.4rem;
            border-bottom: 4px solid var(--gold-line);
        }
        .kicker {
            margin: 0 0 0.45rem;
            color: var(--navy);
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }
        h1, h2, h3 {
            font-family: Georgia, "Times New Roman", serif;
            font-weight: normal;
            color: var(--ink);
        }
        h1 { font-size: clamp(1.9rem, 3vw, 2.6rem); line-height: 1.2; margin: 0 0 0.6rem; max-width: 18em; }
        h2 { font-size: 1.7rem; margin: 0 0 0.7rem; }
        .lead { font-size: 1.15rem; max-width: 42rem; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
        .btn {
            display: inline-block;
            padding: 0.55rem 0.95rem;
            background: var(--navy);
            color: #fff;
            text-decoration: none;
            border: 2px solid var(--navy);
        }
        .btn-line { background: #fff; color: var(--navy); }

        .block { padding: 2.3rem 0; border-top: 1px solid var(--line); }
        .info-grid, .message-grid, .programme-grid, .footer-grid {
            display: grid;
            gap: 1rem;
        }
        .info-grid, .message-grid { grid-template-columns: 1fr 1fr; }
        .programme-grid { grid-template-columns: repeat(3, 1fr); }
        .info-grid div,
        .message-card,
        .programme-card {
            background: #fff;
            color: var(--ink);
            border: 1px solid var(--line);
            border-top: 4px solid var(--gold-line);
            padding: 0.9rem 1rem;
        }
        .info-grid strong { display: block; color: var(--navy); }
        .info-grid span, .programme-card p, .message-card p { color: var(--ink); }
        .programme-card {
            display: block;
            text-decoration: none;
            border-top-color: var(--navy);
        }
        .programme-card h3, .message-card h3 { margin: 0.15rem 0 0.4rem; }
        .role { margin: 0 0 0.7rem; color: var(--navy); font-weight: 600; }
        .message-card p { margin: 0 0 0.7rem; }

        .fact-band { background: var(--navy); color: #fff; padding: 1.3rem 0; }
        .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .fact-band strong, .fact-band span { display: block; color: #fff; }
        .fact-band strong { font-family: Georgia, "Times New Roman", serif; font-size: 1.35rem; font-weight: normal; }

        .facts { padding-left: 1.2rem; }
        .facts li { margin: 0.45rem 0; }

        .site-footer {
            background: #fff;
            color: var(--ink);
            border-top: 4px solid var(--navy);
            padding: 1.5rem 0 2rem;
        }
        .footer-grid { grid-template-columns: 1.4fr 1fr 1fr; }
        .site-footer p { margin: 0.25rem 0; }
        .footer-title {
            font-family: Georgia, "Times New Roman", serif;
            margin: 0 0 0.4rem;
        }

        @media (max-width: 800px) {
            .info-grid, .message-grid, .programme-grid, .stats, .footer-grid { grid-template-columns: 1fr; }
            .nav-panel, .nav-drop--end .nav-panel { position: static; min-width: 0; box-shadow: none; }
        }
    </style>
</head>
<body class="home-page">
<a class="skip" href="#content">Skip to content</a>

<div class="topbar">
    <div class="wrap topbar-inner">
        <p><?= e(college_affiliation()) ?></p>
        <p><?= e(college_address()) ?></p>
        <p>Office hours <?= e(college_hours()) ?></p>
    </div>
</div>

<header class="menu-header">
    <div class="wrap menu-bar">
        <a class="brand" href="<?= e(url('/')) ?>">
            <?php if ($logo !== ''): ?>
                <img src="<?= e($logo) ?>" alt="Seal of <?= e(college_name()) ?>" width="72" height="72">
            <?php endif; ?>
            <span>
                <strong><?= e(college_name()) ?></strong>
                <small>SSMS Degree College</small>
            </span>
        </a>
    </div>
    <div class="wrap">
        <nav class="site-nav" aria-label="Primary">
            <a href="<?= e(url('/')) ?>">Home</a>
            <details class="nav-drop">
                <summary>About Us</summary>
                <div class="nav-panel">
                    <a href="<?= e(url('/college/about/')) ?>">About the college</a>
                    <a href="<?= e(url('/college/about/#mission')) ?>">Mission and vision</a>
                    <a href="<?= e(url('/college/about/#leadership')) ?>">Leadership</a>
                    <a href="<?= e(url('/college/faculty/')) ?>">Teaching staff</a>
                </div>
            </details>
            <details class="nav-drop">
                <summary>Academics</summary>
                <div class="nav-panel">
                    <a href="<?= e(url('/college/academics/')) ?>">Programmes</a>
                    <a href="<?= e(url('/college/admissions/')) ?>">Admissions</a>
                    <a href="<?= e(url('/disclosure/#fees')) ?>">Fees</a>
                    <a href="<?= e(url('/disclosure/#academic-calendar')) ?>">Academic calendar</a>
                    <a href="<?= e(url('/college/notices/')) ?>">Notices</a>
                </div>
            </details>
            <details class="nav-drop">
                <summary>Infrastructure</summary>
                <div class="nav-panel">
                    <a href="<?= e(url('/college/campus/')) ?>">Campus</a>
                    <a href="<?= e(url('/college/campus/#facilities')) ?>">Facilities</a>
                    <a href="<?= e(url('/college/campus/#library')) ?>">Library</a>
                </div>
            </details>
            <details class="nav-drop nav-drop--end">
                <summary>Mandatory Disclosures</summary>
                <div class="nav-panel">
                    <a href="<?= e(url('/disclosure/')) ?>">Mandatory disclosure</a>
                    <a href="<?= e(url('/disclosure/#codes')) ?>">Codes of conduct</a>
                    <a href="<?= e(url('/disclosure/#policies')) ?>">Policies</a>
                </div>
            </details>
            <details class="nav-drop nav-drop--end">
                <summary>NAAC</summary>
                <div class="nav-panel">
                    <a href="<?= e(url('/evaluate/reports/?key=iiqa')) ?>">IIQA</a>
                    <a href="<?= e(url('/evaluate/reports/?key=ssr')) ?>">SSR</a>
                    <a href="<?= e(url('/evaluate/iqac/')) ?>">IQAC</a>
                    <a href="<?= e(url('/evaluate/reports/?key=aqar')) ?>">AQAR</a>
                </div>
            </details>
            <a href="<?= e(url('/college/contact/')) ?>">Contact Us</a>
        </nav>
    </div>
</header>

<main id="content">
    <section class="hero" aria-label="College">
        <div class="wrap">
            <p class="kicker">Established March 2010</p>
            <h1><?= e(college_name()) ?></h1>
            <p class="lead">A professional degree college serving Tarhasi and Palamau with graduate programmes in Arts, Science and Commerce.</p>
            <p class="hero-actions">
                <a class="btn" href="#notices">Latest Notices</a>
                <a class="btn btn-line" href="#programmes">View Courses</a>
            </p>
        </div>
    </section>

    <section id="about" class="block">
        <div class="wrap">
            <p class="kicker">About the College</p>
            <h2>Higher education rooted in Tarhasi, Palamau</h2>
            <p class="lead"><?= e(college_name()) ?> was established in March 2010 to provide accessible graduate education to students of Tarhasi and nearby rural areas. The college operates from its academic and administrative campus and is affiliated to N.P. University, Medininagar.</p>
            <div class="info-grid">
                <div><strong>Graduate Streams</strong><span>Arts, Science and Commerce</span></div>
                <div><strong>Campus Support</strong><span>Library, smart classroom and student guidance</span></div>
                <div><strong>Instruction</strong><span>Hindi and English</span></div>
                <div><strong>College Timing</strong><span><?= e(college_hours()) ?></span></div>
            </div>
            <p><a class="btn" href="<?= e(url('/college/about/')) ?>">Read More About College</a></p>
        </div>
    </section>

    <section class="fact-band" aria-label="College facts">
        <div class="wrap stats">
            <div><strong>2010</strong><span>Established</span></div>
            <div><strong>3</strong><span>Graduate streams</span></div>
            <div><strong>Hindi and English</strong><span>Medium of instruction</span></div>
            <div><strong><?= e(college_hours()) ?></strong><span>Office hours</span></div>
        </div>
    </section>

    <?php if ($messages !== []): ?>
    <section class="block" aria-label="Leadership">
        <div class="wrap">
            <p class="kicker">Leadership Messages</p>
            <h2>Guidance from the college leadership</h2>
            <div class="message-grid">
                <?php foreach ($messages as $message): ?>
                    <article class="message-card">
                        <h3><?= e($message['name']) ?></h3>
                        <p class="role"><?= e($message['role']) ?></p>
                        <?php foreach ($message['paragraphs'] as $paragraph): ?>
                            <p><?= e($paragraph) ?></p>
                        <?php endforeach; ?>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php endif; ?>

    <section id="programmes" class="block">
        <div class="wrap">
            <p class="kicker">Programmes</p>
            <h2>Graduate courses offered</h2>
            <div class="programme-grid">
                <a class="programme-card" href="<?= e(url('/college/academics/')) ?>">
                    <p class="kicker">B.A.</p>
                    <h3>Bachelor of Arts</h3>
                    <p>Humanities and Social Science subjects</p>
                </a>
                <a class="programme-card" href="<?= e(url('/college/academics/')) ?>">
                    <p class="kicker">B.Sc.</p>
                    <h3>Bachelor of Science</h3>
                    <p>Science stream subjects</p>
                </a>
                <a class="programme-card" href="<?= e(url('/college/academics/')) ?>">
                    <p class="kicker">B.Com.</p>
                    <h3>Bachelor of Commerce</h3>
                    <p>Commerce stream subjects</p>
                </a>
            </div>
        </div>
    </section>

    <section id="notices" class="block">
        <div class="wrap">
            <p class="kicker">Latest Notices</p>
            <h2>Notices</h2>
            <?php if ($notices === []): ?>
                <p>Not yet supplied.</p>
            <?php else: ?>
                <ul class="facts">
                    <?php foreach ($notices as $notice): ?>
                        <li>
                            <a href="<?= e(url('/college/notices/')) ?>"><strong><?= e($notice['date']) ?>.</strong> <?= e($notice['title']) ?></a>
                            <?= e($notice['text']) ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
            <p>Eligibility, intake, and fees are not yet supplied.</p>
        </div>
    </section>
</main>

<footer class="site-footer">
    <div class="wrap footer-grid">
        <div>
            <p class="footer-title"><?= e(college_name()) ?></p>
            <p><?= e(college_address()) ?></p>
            <p>A unit of the Indrani Braj Deo Sahay Foundation, New Delhi</p>
            <p><?= e(college_affiliation()) ?></p>
        </div>
        <div>
            <p class="footer-title">Office hours</p>
            <p><?= e(college_hours()) ?></p>
            <p>Financial work closes after 2:30 PM.</p>
            <p>Phone and email are not yet supplied.</p>
        </div>
        <div>
            <p class="footer-title">On this page</p>
            <p><a href="#about">About the college</a></p>
            <p><a href="#programmes">Programmes</a></p>
            <p><a href="#notices">Notices</a></p>
            <p><a href="<?= e(url('/college/contact/')) ?>">Contact Us</a></p>
        </div>
    </div>
</footer>
</body>
</html>
