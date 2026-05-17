const MODULES = [
{
  id: 1,
  title: "Virtualization & Hypervisors",
  tag: "Module 01",
  intro: "Virtualization is the foundation of cloud computing. It lets one physical machine run many independent virtual machines — each thinking it owns real hardware. This module explains what virtualization is, why it matters, and the two types of software (hypervisors) that make it work.",
  sections: [
    {
      title: "What is Virtualization?",
      icon: "🧩",
      concepts: [
        {
          heading: "Core Definition",
          body: `Virtualization is an <strong>umbrella of technologies</strong> that create an abstract (fake-but-functional) environment on top of real hardware. Instead of one physical server running one OS and one application, virtualization lets you carve that server into many <strong>Virtual Machines (VMs)</strong> — each with its own OS, memory, storage, and CPU — all running simultaneously on the same physical box.`
        },
        {
          heading: "Key Components",
          body: `<ul>
            <li><strong>Hypervisor</strong> — The software layer that creates and manages VMs</li>
            <li><strong>Virtual Machine (VM)</strong> — A simulated computer running on physical hardware</li>
            <li><strong>Container</strong> — A lighter-weight alternative to VMs (covered later)</li>
            <li><strong>Storage Virtualization</strong> — Multiple physical disks appear as one logical pool</li>
            <li><strong>Network Virtualization</strong> — Virtual switches/routers independent of physical hardware</li>
          </ul>`
        }
      ]
    },
    {
      title: "Why Use Virtualization?",
      icon: "💡",
      analogy: {
        icon: "🏢",
        label: "Real-World Analogy",
        text: "Think of a physical server as an apartment building. Without virtualization, one tenant rents the entire building but only uses one room — wasteful. Virtualization is like dividing that building into separate apartments. Each tenant gets their own space, and the building's resources are fully used."
      },
      concepts: [
        {
          heading: "1. Reduces IT Costs",
          body: `A non-virtualized server sits <strong>idle most of the time</strong> — the CPU is not being used, yet you're paying for the electricity, cooling, and space. By consolidating many apps onto one physical server as VMs, you buy fewer physical machines and drastically reduce operational costs.`
        },
        {
          heading: "2. Faster Disaster Recovery",
          body: `If a physical server dies, replacing it can take <strong>hours or days</strong>. With VMs, the entire machine is just a set of files. You can clone or move a VM to another physical host in <strong>minutes</strong>, keeping business running.`
        },
        {
          heading: "3. Increased Efficiency",
          body: `IT teams can update, patch, or replicate all VMs from one central console instead of going machine-by-machine. This centralized management saves enormous time.`
        },
        {
          heading: "4. Greener Infrastructure",
          body: `Fewer physical servers = less electricity consumed = lower carbon footprint. Virtualization directly reduces a data center's environmental impact.`
        }
      ]
    },
    {
      title: "What is a Hypervisor?",
      icon: "⚙️",
      concepts: [
        {
          heading: "Definition",
          body: `A hypervisor is the <strong>core software or firmware</strong> that makes virtualization possible. It sits between the physical hardware and the VMs, creating a virtualization layer that separates physical resources (CPU, RAM, storage) from the VMs that use them.`
        },
        {
          heading: "Key Terminology",
          body: `<ul>
            <li><strong>Host Machine</strong> — The physical server where the hypervisor is installed</li>
            <li><strong>Guest VM</strong> — A virtual machine running on top of the hypervisor</li>
          </ul>
          From the VM's perspective, it has no idea it's virtual — it believes it has real hardware. The hypervisor <strong>emulates</strong> the hardware so convincingly that the guest OS never knows the difference.`
        }
      ]
    },
    {
      title: "Type 1 Hypervisor (Bare-Metal)",
      icon: "🖥️",
      concepts: [
        {
          heading: "How It Works",
          body: `A Type 1 hypervisor is installed <strong>directly on the physical server hardware</strong> — there is no OS underneath it. It IS the operating environment. When the server boots, you see a minimal configuration screen (set IP, date, password). To manage VMs, you connect from a <strong>separate management console</strong> on another machine.`
        },
        {
          heading: "Over-Allocation of Resources",
          body: `This is a critical Type 1 advantage. If you have <strong>128 GB of physical RAM</strong> and 8 VMs, you can assign each VM 24 GB — totalling 192 GB — more than you physically have. This works because VMs don't actually consume all their assigned RAM simultaneously. The hypervisor dynamically allocates real RAM based on actual usage.`
        },
        {
          heading: "VM Migration",
          body: `If a physical server is overloaded or fails, Type 1 hypervisors can <strong>automatically move a running VM</strong> to another physical host with zero downtime for the end user. This is called <strong>Live Migration</strong>.`
        },
        {
          heading: "Vendors",
          body: `<ul>
            <li><strong>VMware ESXi/vSphere</strong> — Industry leader, rich features, paid licensing</li>
            <li><strong>KVM (Kernel-Based VM)</strong> — Built into Linux; open-source; treats the Linux kernel itself as a hypervisor</li>
            <li><strong>Microsoft Hyper-V</strong> — Ships with Windows Server; free and commercial editions</li>
            <li><strong>Citrix Hypervisor (XenServer)</strong> — Enterprise-focused, strong GPU virtualization</li>
            <li><strong>Oracle VM</strong> — Open-source Xen core; less feature-rich than VMware</li>
          </ul>`
        }
      ]
    },
    {
      title: "Type 2 Hypervisor (Hosted)",
      icon: "💻",
      concepts: [
        {
          heading: "How It Works",
          body: `A Type 2 hypervisor is installed <strong>inside an existing OS</strong> (Windows, macOS, Linux) just like any other application. The stack looks like: Physical Hardware → Host OS → Hypervisor App → Guest VMs. It acts as its own management console — no separate machine needed.`
        },
        {
          heading: "Resource Allocation — The Critical Difference",
          body: `Unlike Type 1, a Type 2 hypervisor <strong>cannot dynamically allocate</strong> resources. If you assign 8 GB of RAM to a VM, that full 8 GB is immediately locked — even if the VM only uses 1 GB. Over-allocating will crash the host machine. <strong>Always ensure the host retains enough resources to keep running.</strong>`
        },
        {
          heading: "Best Use Cases",
          body: `Type 2 hypervisors are ideal for <strong>development, testing, and research</strong> — running multiple OS environments on your personal laptop to test software compatibility.`
        },
        {
          heading: "Vendors",
          body: `<ul>
            <li><strong>Oracle VirtualBox</strong> — Free, cross-platform, great for personal use</li>
            <li><strong>VMware Workstation Pro</strong> — Feature-rich but paid; Windows/Linux</li>
            <li><strong>VMware Fusion</strong> — macOS equivalent of Workstation</li>
            <li><strong>VMware Workstation Player</strong> — Free, basic sandbox version</li>
          </ul>`
        }
      ]
    },
    {
      title: "Type 1 vs. Type 2 — Side-by-Side",
      icon: "⚖️",
      table: {
        headers: ["Feature", "Type 1 (Bare-Metal)", "Type 2 (Hosted)"],
        rows: [
          ["Runs on", "Directly on hardware", "Inside a host OS"],
          ["Performance", "Higher (direct hardware access)", "Lower (extra OS layer)"],
          ["Resource Allocation", "Dynamic / over-allocation allowed", "Static / no over-allocation"],
          ["Management", "Separate console required", "Built into the app"],
          ["Use Case", "Enterprise data centers", "Dev, testing, personal use"],
          ["Examples", "VMware ESXi, KVM, Hyper-V", "VirtualBox, VMware Workstation"]
        ]
      }
    }
  ]
},
{
  id: 2,
  title: "Levels of Virtualization",
  tag: "Module 02",
  intro: "Virtualization doesn't happen at just one level — it can intercept at the instruction set, hardware, OS, or library level. Each level provides a different degree of isolation and performance. This module walks through all four levels and then explains the two strategies hypervisors use to grant guest OS privilege: Paravirtualization and Full Virtualization.",
  sections: [
    {
      title: "ISA Level (Instruction Set Architecture)",
      icon: "🔣",
      analogy: {
        icon: "🌐",
        label: "Analogy",
        text: "Imagine you wrote a book in French, but the printer only understands English. An ISA-level emulator is the real-time translator sitting between them, converting every French sentence into English on the fly before the printer sees it."
      },
      concepts: [
        {
          heading: "What It Does",
          body: `ISA-level virtualization lets a VM designed for <strong>one CPU architecture</strong> (e.g., x86 Intel) run on a <strong>completely different architecture</strong> (e.g., ARM). An <strong>emulator</strong> acts as an interpreter — it reads each instruction meant for the original CPU and translates it into an equivalent instruction the host CPU understands.`
        },
        {
          heading: "How the Emulator Works",
          body: `The physical host has its own instruction set (e.g., ARM). When a VM issues an x86 instruction, the emulator:<br/>
          1. Intercepts the instruction<br/>
          2. Maps it to the host's equivalent ARM instruction<br/>
          3. Executes it on the real hardware<br/>
          4. Returns the result to the VM<br/>
          This means <strong>any software</strong> written for any architecture can technically run anywhere — at a performance cost.`
        },
        {
          heading: "Common ISAs",
          body: `<ul>
            <li><strong>x86 / x86-64</strong> — Intel and AMD processors in most PCs and servers</li>
            <li><strong>ARM</strong> — Used in phones, tablets, and Apple Silicon Macs</li>
            <li><strong>MIPS</strong> — Networking equipment and embedded systems</li>
            <li><strong>SPARC</strong> — Sun/Oracle servers and workstations</li>
          </ul>`
        },
        {
          heading: "Real-World Examples",
          body: `<ul>
            <li><strong>QEMU</strong> — Open-source emulator. Can run x86 software on ARM, ARM software on x86, etc.</li>
            <li><strong>Rosetta 2 (Apple)</strong> — When Apple switched from Intel (x86) to its own ARM chips (Apple Silicon), Rosetta 2 automatically translated old x86 Mac apps to run on the new ARM hardware — in real time, invisibly to the user.</li>
          </ul>`
        }
      ]
    },
    {
      title: "Hardware Abstraction Level (HAL)",
      icon: "🔧",
      concepts: [
        {
          heading: "What It Does",
          body: `HAL virtualization sits directly on top of bare hardware and produces a <strong>virtual hardware environment</strong>. The hypervisor presents virtual CPUs, virtual RAM, and virtual I/O devices to the guest OS. The guest OS interacts with these virtual devices exactly as if they were real.`
        },
        {
          heading: "Two Types of Instructions",
          body: `Not all instructions are equal. HAL-level virtualization distinguishes between:<br/><br/>
          <strong>Non-privileged instructions</strong> — Safe, harmless operations that execute directly on the hardware without any translation (e.g., arithmetic). These run at full native speed.<br/><br/>
          <strong>Privileged instructions</strong> — Instructions that could affect system stability if run unchecked (e.g., touching hardware directly, changing memory mappings). These must be intercepted, checked, and emulated by the hypervisor before they reach hardware.`
        }
      ]
    },
    {
      title: "Operating System Level (Containers)",
      icon: "📦",
      concepts: [
        {
          heading: "What It Does",
          body: `Instead of virtualizing hardware, OS-level virtualization lets the <strong>kernel create isolated user-space instances</strong> called <strong>containers</strong>. Every container shares the same host OS kernel but has its own isolated processes, network interfaces, and file system.`
        },
        {
          heading: "Containers vs. VMs at This Level",
          body: `VMs (hardware-level virtualization) each have their own <strong>full OS</strong> — an entire kernel booted up per VM. Containers skip that entirely — they share one kernel and only isolate the user-space layer. This makes containers <strong>much lighter and faster to start</strong>, but they can only run software compatible with the host kernel.`
        },
        {
          heading: "Examples",
          body: `<ul>
            <li><strong>Docker</strong> — The most widely used containerization platform (covered in Modules 5–9)</li>
            <li><strong>LXC (Linux Containers)</strong> — Lower-level Linux kernel containers, less feature-rich than Docker</li>
          </ul>`
        }
      ]
    },
    {
      title: "Library Level (API Emulation)",
      icon: "📚",
      concepts: [
        {
          heading: "What It Does",
          body: `Rather than virtualizing hardware or the whole OS, library-level virtualization <strong>emulates specific software libraries and system calls</strong> that an application depends on. This lets programs built for Platform A run on Platform B by translating API calls at the library layer.`
        },
        {
          heading: "WINE — Windows Apps on Linux",
          body: `WINE (Wine Is Not an Emulator — yes, the name is recursive) is the best example. When a Windows application calls a Windows API function (e.g., <code>CreateWindow()</code>), WINE intercepts that call and translates it into the equivalent Linux system call. The application never knows it's running on Linux. WINE is <strong>faster than a full Windows VM</strong> because it doesn't emulate entire hardware — only the library layer.`
        },
        {
          heading: "WSL — Linux on Windows",
          body: `WSL (Windows Subsystem for Linux) does the opposite: it lets you run Linux command-line tools on Windows by emulating Linux system calls over the Windows kernel. No Linux VM needed — just a compatibility translation layer.`
        }
      ]
    },
    {
      title: "CPU Privilege Rings — Foundation for Paravirt & Full Virt",
      icon: "💍",
      concepts: [
        {
          heading: "What Are CPU Rings?",
          body: `Modern x86 CPUs have <strong>4 privilege levels called Rings (0–3)</strong>. Ring 0 has the highest privilege (direct hardware access). Ring 3 has the lowest (user applications).<br/><br/>
          <strong>Ring 0</strong> — OS kernel, device drivers<br/>
          <strong>Ring 3</strong> — User applications (your browser, text editor, etc.)<br/><br/>
          The problem: A guest OS in a VM also tries to run in Ring 0 — but the hypervisor needs Ring 0 for itself. Two entities cannot safely share Ring 0. Hypervisors solve this with two strategies.`
        }
      ]
    },
    {
      title: "Paravirtualization",
      icon: "🔗",
      concepts: [
        {
          heading: "Core Idea",
          body: `In paravirtualization, the <strong>guest OS is modified</strong> — its kernel is recompiled before installation inside the VM. The modified kernel is aware that it is running inside a VM and knows it cannot directly issue privileged instructions.`
        },
        {
          heading: "Hypercalls — How It Communicates",
          body: `Instead of issuing a privileged instruction directly to hardware, the modified guest OS makes a <strong>hypercall</strong> — a special API call to the hypervisor. Think of it like the guest OS asking the hypervisor: <em>"Please do this privileged thing on my behalf."</em><br/><br/>
          The hypervisor receives the hypercall, performs the operation on the real hardware, and returns the result. The guest VM runs in <strong>Ring 3</strong> (least privileged), and the hypervisor stays in Ring 0.`
        },
        {
          heading: "Trade-offs",
          body: `<ul>
            <li><strong>Advantage</strong> — Fewer interceptions needed → better performance than full virtualization</li>
            <li><strong>Disadvantage</strong> — The guest OS must be modified, so you cannot run unmodified proprietary OS (e.g., standard Windows)</li>
            <li><strong>Supporters</strong> — VMware (with VMware Tools), Xen</li>
          </ul>`
        }
      ]
    },
    {
      title: "Full Virtualization",
      icon: "🔄",
      concepts: [
        {
          heading: "Core Idea",
          body: `In full virtualization, the guest OS is <strong>completely unmodified</strong> — not a single line of its kernel code is changed. It runs exactly as it would on real hardware. The OS has no idea it's inside a VM.`
        },
        {
          heading: "The Trap-and-Emulate Strategy",
          body: `Since the unmodified guest OS thinks it's in Ring 0 and issues privileged instructions freely, the hypervisor intercepts these using a hardware mechanism called a <strong>trap</strong>:<br/><br/>
          1. Guest OS issues a privileged instruction<br/>
          2. CPU detects this and <strong>traps</strong> — it pauses execution and hands control to the hypervisor<br/>
          3. The hypervisor <strong>emulates</strong> what the instruction would have done<br/>
          4. Returns the result to the guest OS<br/><br/>
          The guest OS never knows anything was intercepted — it just got its result.`
        },
        {
          heading: "Trade-offs",
          body: `<ul>
            <li><strong>Advantage</strong> — Run <em>any</em> unmodified OS (Windows, Linux, BSD) without changes</li>
            <li><strong>Disadvantage</strong> — Higher overhead due to constant instruction trapping and emulation</li>
            <li><strong>Hardware Help</strong> — Intel VT-x and AMD-V hardware extensions were invented specifically to make trap-and-emulate much faster</li>
          </ul>`
        }
      ]
    },
    {
      title: "Paravirt vs. Full Virt — Side-by-Side",
      icon: "⚖️",
      table: {
        headers: ["Feature", "Paravirtualization", "Full Virtualization"],
        rows: [
          ["Guest OS Modified?", "Yes — recompiled with hypercall support", "No — completely unmodified"],
          ["Communication Method", "Hypercalls to hypervisor", "Trap-and-emulate"],
          ["Performance", "Better (fewer traps)", "More overhead (every priv. instruction trapped)"],
          ["OS Compatibility", "Only OSes that support hypercalls", "Any OS works"],
          ["Hardware Assist Needed?", "No", "Benefits greatly from Intel VT-x / AMD-V"],
          ["Examples", "Xen, VMware (with VMware Tools)", "Standard KVM, VirtualBox"]
        ]
      }
    }
  ]
},
{
  id: 3,
  title: "Software Defined Networking (SDN) & OpenFlow",
  tag: "Module 03",
  intro: "Traditional networks are rigid — intelligence is baked into every individual router. SDN flips this model by extracting all decision-making into a centralized software controller, turning network devices into simple forwarding machines. This module explains why SDN was invented, how it works step-by-step, and what OpenFlow is.",
  sections: [
    {
      title: "The Problem with Traditional Networks",
      icon: "🔒",
      concepts: [
        {
          heading: "How Traditional Routers Work",
          body: `Every traditional router contains two tightly coupled modules:<br/><br/>
          <strong>Control Plane</strong> — The decision-maker. Runs routing algorithms (e.g., OSPF, BGP) to figure out the best path for every packet.<br/><br/>
          <strong>Data Plane</strong> — The executor. Simply forwards packets according to the routing table built by the control plane.<br/><br/>
          These two planes are <strong>"baked in"</strong> — inseparable, proprietary, and vendor-specific. Cisco decides what routing features its routers have. You cannot change or extend the control logic.`
        },
        {
          heading: "Why This Is Problematic",
          body: `<ul>
            <li><strong>No Standardization</strong> — Different vendors have incompatible control planes. A Cisco router and a Juniper router don't easily share control logic.</li>
            <li><strong>Hard to Update Policy</strong> — If you want to change a routing policy, you must log into every individual router and reconfigure each one separately.</li>
            <li><strong>Poor Scalability</strong> — Routing protocols (Distance Vector, Link State) require all routers to coordinate with each other — this gets exponentially complex as networks grow.</li>
            <li><strong>Vendor Lock-in</strong> — Features are limited to what the vendor provides. You pay for hardware <em>and</em> software as a bundle.</li>
          </ul>`
        }
      ]
    },
    {
      title: "What is SDN?",
      icon: "🧠",
      analogy: {
        icon: "✈️",
        label: "Analogy",
        text: "Think of an air traffic control system. In traditional networking, every pilot decides their own route (distributed control). In SDN, there's a central air traffic controller (the SDN controller) who sees the entire airspace and tells every plane exactly where to fly. The planes (switches) just follow instructions."
      },
      concepts: [
        {
          heading: "The SDN Solution",
          body: `SDN (Software Defined Networking) <strong>separates the control plane from the data plane</strong>:<br/><br/>
          Vendors only provide the <strong>hardware (data plane)</strong> — the physical switching/routing hardware.<br/>
          <strong>You</strong> write and control the software (control plane) — the logic that decides how traffic flows.<br/><br/>
          This gives you complete control over your network's behavior without being limited by what a vendor pre-programmed.`
        },
        {
          heading: "The Two Components of SDN",
          body: `<ul>
            <li><strong>SDN Controller</strong> — The "brain" of the network. All routing logic, policies, and decisions live here. It is software running on a server, not embedded in a switch.</li>
            <li><strong>SDN Switch</strong> — A "blind" device. It has no built-in routing logic. It stores forwarding rules in a hardware table (TCAM) and simply executes them. All intelligence comes from the controller.</li>
          </ul>`
        },
        {
          heading: "Advantages of SDN",
          body: `<ul>
            <li><strong>Features no longer limited by vendors</strong> — Write your own control logic</li>
            <li><strong>Community development</strong> — Open-source controllers mean shared innovation</li>
            <li><strong>Longer product life</strong> — Update the software without replacing hardware</li>
            <li><strong>Open APIs</strong> — Third-party apps can program the network via REST APIs</li>
          </ul>`
        }
      ]
    },
    {
      title: "How SDN Works — Step by Step",
      icon: "📡",
      flow: [
        { num: "1", label: "Packet arrives at switch" },
        { num: "2", label: "Switch checks TCAM — TableMiss!" },
        { num: "3", label: "Switch sends 'packet-in' to controller" },
        { num: "4", label: "Controller evaluates logic" },
        { num: "5", label: "Controller sends 'packet-out' rule" },
        { num: "6", label: "Switch installs rule in TCAM & forwards" }
      ],
      concepts: [
        {
          heading: "TCAM — Ternary Content Addressable Memory",
          body: `TCAM is a specialized hardware table in the switch that enables <strong>extremely fast lookups</strong>. Instead of searching row-by-row, TCAM can match a packet against all rules simultaneously in one clock cycle. The switch checks incoming packets against this table to find a matching forwarding rule.`
        },
        {
          heading: "TableMiss — What Happens When No Rule Exists",
          body: `When the very first packet arrives from host h1 to host h3, the switch has <strong>no rule</strong> for it yet — this is a <strong>TableMiss</strong>. The switch:<br/>
          1. Buffers the packet (holds it in memory)<br/>
          2. Sends a <strong>"packet-in" event</strong> to the controller, including the packet's metadata (source/destination MAC, IP, ports)<br/>
          3. Waits for the controller's response`
        },
        {
          heading: "Controller Response — 'packet-out'",
          body: `The controller evaluates the packet metadata using its programmed logic. It generates a rule in the format <strong>&lt;match, action&gt;</strong>:<br/>
          — <strong>match</strong>: which packets this rule applies to (e.g., source IP = 10.0.0.1, destination IP = 10.0.0.3)<br/>
          — <strong>action</strong>: what to do (e.g., forward out port 3)<br/><br/>
          This rule is sent back to the switch as a <strong>"packet-out" event</strong>. The switch installs this rule into its TCAM. All future packets matching this rule are forwarded immediately without consulting the controller again.`
        }
      ]
    },
    {
      title: "What is OpenFlow?",
      icon: "🔓",
      concepts: [
        {
          heading: "Definition",
          body: `OpenFlow is an <strong>open standard communication protocol</strong> that defines how an SDN controller talks to network switches. It specifies the exact format of messages sent between the controller and the switches' data planes.`
        },
        {
          heading: "Is OpenFlow the Same as SDN?",
          body: `<strong>No.</strong> SDN is the architectural concept (separate control from data plane). OpenFlow is one <em>enabling technology</em> that implements SDN — just one of several. Another example is <strong>NETCONF</strong> (Network Configuration Protocol). You can build SDN without OpenFlow, but OpenFlow is the most widely used standard.`
        },
        {
          heading: "Flow Table Entries",
          body: `Each rule installed in an OpenFlow switch's TCAM contains:<br/>
          <strong>Rule</strong> — The match fields (source/dest MAC, IP, TCP ports, VLAN, etc.)<br/>
          <strong>Action</strong> — What to do with matching packets<br/>
          <strong>Stats</strong> — Packet and byte counters (how many packets matched this rule)<br/>
          <strong>Priority</strong> — Which rule wins if multiple rules match the same packet`
        },
        {
          heading: "Possible Actions on a Packet",
          body: `<ul>
            <li><strong>Forward</strong> — Send packet out one or more specific ports</li>
            <li><strong>Encapsulate & Forward to Controller</strong> — Send packet up to the controller for complex processing</li>
            <li><strong>Normal Pipeline</strong> — Process through the switch's normal legacy logic</li>
            <li><strong>Modify Fields</strong> — Change packet headers (e.g., rewrite source IP)</li>
            <li><strong>Drop</strong> — Discard the packet (firewall behavior)</li>
          </ul>`
        }
      ]
    },
    {
      title: "OpenFlow Message Types",
      icon: "📨",
      concepts: [
        {
          heading: "1. Controller-to-Switch Messages",
          body: `Sent by the controller to the switch. May not require a response.<br/>
          <strong>Feature Request</strong> — Controller asks the switch what OpenFlow features it supports<br/>
          <strong>Configuration</strong> — Controller configures switch parameters<br/>
          <strong>Modify State</strong> — Controller adds, deletes, or modifies flow entries in the switch's TCAM`
        },
        {
          heading: "2. Asynchronous Messages (Switch-Initiated)",
          body: `Switches send these to the controller without being asked:<br/>
          <strong>Packet-In</strong> — Switch encountered a TableMiss and is forwarding the packet to the controller<br/>
          <strong>Flow Removed</strong> — Notifies controller that a flow entry expired or was deleted`
        },
        {
          heading: "3. Symmetric Messages (Either Direction)",
          body: `Either the controller or the switch can initiate these:<br/>
          <strong>Hello</strong> — Exchanged first when a TCP connection is established; used to negotiate the OpenFlow version both sides will use<br/>
          <strong>Echo Request/Reply</strong> — Heartbeat messages to verify the connection is still alive`
        }
      ]
    },
    {
      title: "OpenFlow Controllers",
      icon: "🎮",
      table: {
        headers: ["Controller", "Language", "Best For"],
        rows: [
          ["NOX", "C++", "High performance, production"],
          ["POX", "Python", "Education, prototyping"],
          ["Ryu", "Python", "Research, easy to extend"],
          ["Floodlight", "Java", "Enterprise features"],
          ["OpenDaylight", "Java", "Large-scale production SDN"]
        ]
      }
    }
  ]
},
{
  id: 4,
  title: "Network Emulators, Simulators & Mininet",
  tag: "Module 04",
  intro: "Before deploying real SDN infrastructure, you need to test your network logic. This module covers the difference between network simulators and emulators, then dives deep into Mininet — the most important SDN emulation tool. Every command is explained in plain English so you know exactly what you're doing.",
  sections: [
    {
      title: "Simulators vs. Emulators — What's the Difference?",
      icon: "⚗️",
      analogy: {
        icon: "🚗",
        label: "Analogy",
        text: "A flight simulator uses math models to make you feel like you're flying — but you're not in a real plane. A flight emulator would be an actual plane cockpit with real instruments, just not in the air. Simulators model behavior mathematically; emulators replicate real hardware/software behavior."
      },
      concepts: [
        {
          heading: "Network Simulators",
          body: `Simulators use <strong>mathematical models</strong> to mimic how a network would behave. They are fast and scalable but don't run real networking software — they model it. Changes may not reflect exactly what would happen with real hardware.<br/><br/>
          <strong>Examples:</strong> NS-2 (Network Simulator 2), Cisco Packet Tracer`
        },
        {
          heading: "Network Emulators",
          body: `Emulators replicate <strong>real hardware and software</strong>. Real network processes run inside — actual TCP/IP stacks, real routing protocols, real OpenFlow agents. What you test is exactly what would happen in a real deployment.<br/><br/>
          <strong>Example:</strong> Mininet — runs real Linux network stacks in isolated namespaces`
        }
      ]
    },
    {
      title: "What is Mininet?",
      icon: "🌐",
      concepts: [
        {
          heading: "Core Concept",
          body: `Mininet creates a <strong>software-defined network on a single PC</strong> using Linux processes in <strong>network namespaces</strong>. Each host/switch is a Linux process with its own isolated network stack — they behave exactly like real machines.<br/><br/>
          You can create networks of hundreds of virtual hosts, switches, and controllers — all on your laptop — and run real tools like <code>ping</code>, <code>iperf</code>, and Wireshark on them.`
        },
        {
          heading: "MiniEdit",
          body: `MiniEdit is a graphical GUI editor for Mininet. Instead of typing commands, you drag-and-drop hosts and switches to build a topology visually. Run it with:<br/><code>sudo python3 mininet/examples/miniedit.py</code>`
        }
      ]
    },
    {
      title: "Installation",
      icon: "📥",
      commands: [
        {
          label: "Install Mininet (Ubuntu/Debian)",
          lines: [
            { cmd: "sudo apt-get update", explain: "Refresh the package list from repositories so you get the latest versions." },
            { cmd: "sudo apt-get install mininet", explain: "Install Mininet from the package manager. Quick but may be an older version." },
            { cmd: "git clone https://github.com/mininet/mininet", explain: "Clone the official Mininet source code from GitHub for the latest version." },
            { cmd: "cd mininet && git tag", explain: "View all release versions. Pick the version that matches your course." },
            { cmd: "mininet/util/install.sh -a", explain: "Run the full install script. The -a flag installs everything: Mininet, Open vSwitch, OpenFlow controller, Wireshark, and more." }
          ]
        }
      ]
    },
    {
      title: "Starting Mininet & Basic Commands",
      icon: "▶️",
      commands: [
        {
          label: "Mininet CLI basics",
          lines: [
            { cmd: "sudo mn", explain: "Start Mininet with the default minimal topology: 2 hosts (h1, h2) connected to 1 switch (s1), controlled by a built-in OpenFlow controller." },
            { cmd: "nodes", explain: "List all nodes in the current topology (hosts, switches, controllers). Helps you see what's available." },
            { cmd: "net", explain: "Display all network links — which ports connect which devices." },
            { cmd: "dump", explain: "Print detailed info about every node: process ID, IP address, interface names." },
            { cmd: "h1 ifconfig", explain: "Run the ifconfig command on host h1. Prefix any command with a node name to run it on that specific virtual machine." },
            { cmd: "h1 ping 10.0.0.2", explain: "Send ICMP ping packets from h1 to h2 (10.0.0.2). Tests connectivity between two virtual hosts." },
            { cmd: "exit", explain: "Stop and clean up the Mininet network. Removes all virtual interfaces, namespaces, and switch instances." },
            { cmd: "sudo mn -c", explain: "Clean up any leftover Mininet state (useful if a previous session crashed). Always run this if Mininet complains about existing networks." }
          ]
        }
      ]
    },
    {
      title: "Custom Topologies",
      icon: "🗺️",
      commands: [
        {
          label: "Built-in topology types",
          lines: [
            { cmd: "sudo mn --topo single,4", explain: "Create 4 hosts all connected to a single switch. Like a star topology. Good for testing simple scenarios." },
            { cmd: "sudo mn --topo linear,4", explain: "Create 4 hosts, each connected to its own switch, and the switches connected in a line: h1-s1-s2-s3-s4-h4. Good for testing multi-hop routing." },
            { cmd: "sudo mn --topo tree,depth=2,fanout=2", explain: "Create a tree topology 2 levels deep with 2 children per node. Results in 4 hosts connected through 3 switches in a tree structure." },
            { cmd: "sudo mn --mac", explain: "Assign linearly increasing MAC addresses to hosts: h1 gets 00:00:00:00:00:01, h2 gets 00:00:00:00:00:02, etc. Makes it easy to identify hosts from packet captures." },
            { cmd: "mn --custom myTopo.py --topo mytopo", explain: "Load a custom Python topology file. Inside myTopo.py you define your own network using the Mininet Python API — add hosts, switches, links with custom settings." }
          ]
        }
      ]
    },
    {
      title: "Link Configuration & Remote Controller",
      icon: "🔌",
      commands: [
        {
          label: "Link manipulation",
          lines: [
            { cmd: "link s1 h1 down", explain: "Bring down (disable) the link between switch s1 and host h1. Use this to simulate link failures and test your network's fault tolerance." },
            { cmd: "link s1 h1 up", explain: "Re-enable the link. Your SDN controller should automatically update its routing tables to restore connectivity." },
            { cmd: "sudo mn --link tc,bw=10,delay=10ms", explain: "Create a network where every link has: bw=10 (bandwidth of 10 Mbps) and delay=10ms (each link adds 10ms latency). Uses Linux Traffic Control (tc) to emulate realistic network conditions." },
            { cmd: "sudo mn --controller=remote,ip=192.168.1.5,port=6633", explain: "Connect Mininet's switches to an external SDN controller (e.g., Ryu or POX running on another machine at 192.168.1.5, listening on port 6633). This is how you test your own controller." }
          ]
        }
      ]
    },
    {
      title: "Measuring Network Throughput with Iperf",
      icon: "📊",
      concepts: [
        {
          heading: "What is Iperf?",
          body: `Iperf is a command-line tool that measures <strong>maximum network bandwidth</strong> between two hosts. It works in a client-server model — one host is the server (receives traffic), the other is the client (sends traffic). The tool measures how fast data actually transfers, accounting for real network conditions.`
        }
      ],
      commands: [
        {
          label: "Full iperf TCP measurement workflow",
          lines: [
            { cmd: "sudo mn --topo single,2", explain: "Create a simple topology: 2 hosts (h1, h2) connected to 1 switch. This is the test environment." },
            { cmd: "h2 iperf -s -p 8080 -i 1", explain: "On host h2: start an iperf SERVER (-s) listening on port 8080 (-p 8080), reporting bandwidth stats every 1 second (-i 1)." },
            { cmd: "h1 iperf -c 10.0.0.2 -p 8080 -t 15", explain: "On host h1: start iperf as a CLIENT (-c), connecting to server at 10.0.0.2, on port 8080, running for 15 seconds (-t 15). It will measure TCP throughput for the entire duration." },
            { cmd: "h1 iperf -c 10.0.0.2 -p 8080 -t 15 > result", explain: "Same as above but redirect the output to a file called 'result' so we can plot it later." }
          ]
        },
        {
          label: "Processing and plotting results with gnuplot",
          lines: [
            { cmd: "cat result | grep sec | head -15 | tr - \" \" | awk '{print$4,$8}' > new-result", explain: "Pipeline explanation: cat result — reads the file | grep sec — keep only lines containing 'sec' (the data rows) | head -15 — take the first 15 rows | tr - \" \" — replace hyphens with spaces (so awk can parse ranges like '0.0-1.0') | awk '{print$4,$8}' — print only column 4 (time) and column 8 (bandwidth) > new-result — save to a clean data file." },
            { cmd: "gnuplot", explain: "Open the gnuplot interactive plotting tool." },
            { cmd: "plot \"new-result\" title \"tcp throughput\" with linespoint", explain: "Plot the data file 'new-result'. X-axis = time, Y-axis = throughput in Mbps. 'with linespoint' draws both a line and data points at each measurement." }
          ]
        }
      ]
    },
    {
      title: "Reading the Throughput Graph",
      icon: "📈",
      concepts: [
        {
          heading: "X-Axis — Time",
          body: `The horizontal axis represents time in seconds over which iperf was running (e.g., 0–15 seconds).`
        },
        {
          heading: "Y-Axis — Throughput",
          body: `The vertical axis shows throughput in Gbps/Mbps. <strong>Higher is better.</strong>`
        },
        {
          heading: "What to Look For",
          body: `<ul>
            <li><strong>Stable high line</strong> — Healthy network, no congestion</li>
            <li><strong>Sudden drops</strong> — Packet loss or link failure events</li>
            <li><strong>Fluctuating line</strong> — Network congestion, buffering issues, or competing traffic</li>
          </ul>
          <strong>Average Throughput</strong> = Total data transferred ÷ Duration. For example, 100 MB transferred in 10 seconds = 10 MB/s (80 Mbps).`
        }
      ]
    }
  ]
},
{
  id: 5,
  title: "Docker — Containers & Architecture",
  tag: "Module 05",
  intro: "Docker solves the classic problem: 'it works on my machine but not on yours.' By packaging an application together with everything it needs to run — libraries, configs, dependencies — Docker containers run identically anywhere. This module explains containers, compares them to VMs, and covers Docker's architecture and core commands.",
  sections: [
    {
      title: "The Problem Docker Solves",
      icon: "😤",
      analogy: {
        icon: "📦",
        label: "Analogy",
        text: "Imagine shipping goods. Without containers, you stack loose boxes and items on a ship — things fall, get mixed up, and depend on the ship being arranged exactly right. With shipping containers, each shipment is a sealed, standardized box that can go on any ship, truck, or train without any repacking. Docker containers do the same for software."
      },
      concepts: [
        {
          heading: "The 'Works On My Machine' Problem",
          body: `When you develop an app on your machine with Python 3.11, specific libraries, and certain environment variables, it works. When a colleague runs it on their machine with Python 3.8 and different libraries, it crashes. Docker eliminates this by <strong>bundling the app + its entire environment</strong> into one portable unit — the container.`
        }
      ]
    },
    {
      title: "Containers vs. Virtual Machines",
      icon: "⚖️",
      table: {
        headers: ["Aspect", "Virtual Machine", "Docker Container"],
        rows: [
          ["Size", "GBs (includes full OS)", "MBs (shares host OS kernel)"],
          ["Startup Time", "Minutes (full OS boot)", "Seconds (just starts process)"],
          ["Isolation", "Full hardware isolation", "Process-level isolation"],
          ["Resource Usage", "Blocks allocated RAM/CPU", "Uses only what it needs"],
          ["Portability", "Heavy to move", "Lightweight, runs anywhere"],
          ["Use Case", "Strong isolation needed", "Microservices, fast deployment"]
        ]
      },
      concepts: [
        {
          heading: "Why Containers Win for Most Apps",
          body: `Consider running 2 versions of Ruby. With VMs, you create 2 separate VMs — each with its own OS consuming gigabytes. With Docker, you create 2 containers — both share the host Linux kernel but have isolated Ruby environments. Much faster, much lighter.`
        }
      ]
    },
    {
      title: "Docker Core Concepts",
      icon: "🧱",
      concepts: [
        {
          heading: "Docker Image",
          body: `A Docker image is a <strong>read-only blueprint/template</strong> for creating containers. Think of it like a class in programming — it defines structure and behavior. Images are built using a <strong>Dockerfile</strong> (a recipe file) and the <code>docker build</code> command. They can be stored and shared via Docker Hub.`
        },
        {
          heading: "Docker Container",
          body: `A container is a <strong>running instance of an image</strong> — like an object instantiated from a class. You can run many containers from the same image simultaneously. Each container is isolated but shares the host OS kernel.`
        },
        {
          heading: "Docker Registry",
          body: `A registry is a <strong>storage and distribution system for Docker images</strong>. The default public registry is <strong>Docker Hub</strong> (hub.docker.com) — like GitHub but for Docker images. You can also run a private registry inside your organization.`
        },
        {
          heading: "Docker Engine",
          body: `The Docker Engine is the background service running on your host machine. It has 3 parts:<br/>
          <strong>Docker Daemon</strong> — The server process that manages images, containers, networks, and volumes<br/>
          <strong>CLI Client</strong> — The <code>docker</code> command you type in the terminal<br/>
          <strong>REST API</strong> — The communication channel between the CLI and the daemon`
        }
      ]
    },
    {
      title: "Essential Docker Commands Explained",
      icon: "💻",
      commands: [
        {
          label: "Docker fundamentals",
          lines: [
            { cmd: "docker --version", explain: "Print the installed Docker version. Use this to verify Docker is installed correctly." },
            { cmd: "docker images", explain: "List all Docker images stored locally on your machine. Shows image name, tag, ID, creation date, and size." },
            { cmd: "docker pull ubuntu", explain: "Download the 'ubuntu' image from Docker Hub to your local machine. You don't need to pull manually before 'run' — run pulls automatically if needed." },
            { cmd: "docker run -it ubuntu", explain: "Create and start a new container from the 'ubuntu' image. -i = interactive (keep stdin open), -t = allocate a pseudo-terminal. Together they give you a shell inside the container." },
            { cmd: "docker run -it --name mycontainer ubuntu", explain: "Same as above but give the container a name 'mycontainer' instead of a random auto-generated one. Named containers are easier to reference in subsequent commands." },
            { cmd: "docker ps", explain: "List all currently RUNNING containers. Shows container ID, image, command, creation time, status, ports, and name." },
            { cmd: "docker ps -a", explain: "List ALL containers — running AND stopped. The -a (all) flag shows the full history of containers on your system." },
            { cmd: "docker exec -it mycontainer bash", explain: "Open a new bash shell inside an ALREADY RUNNING container called mycontainer. Different from 'run' — exec connects to an existing container rather than starting a new one." },
            { cmd: "docker attach mycontainer", explain: "Attach your terminal to the main process of a running container. Unlike exec, attach connects to the primary PID — exiting will stop the container." },
            { cmd: "docker stop mycontainer", explain: "Gracefully stop a running container. Sends SIGTERM first, waits 10 seconds, then sends SIGKILL. The container can be restarted later." },
            { cmd: "docker kill mycontainer", explain: "Forcefully terminate a container immediately. Sends SIGKILL without the graceful waiting period. Use when stop is unresponsive." },
            { cmd: "docker rm mycontainer", explain: "Remove (delete) a stopped container. Does not delete the image it was created from — just the container instance and its writable layer." },
            { cmd: "docker rmi ubuntu", explain: "Remove (delete) a Docker image from your local machine. Cannot delete an image if containers (even stopped) still reference it — remove containers first." }
          ]
        }
      ]
    }
  ]
},
{
  id: 6,
  title: "Docker Commands & Dockerfile",
  tag: "Module 06",
  intro: "A Dockerfile is the recipe that automates building Docker images. Instead of manually running commands inside a container and committing, you write all steps in a text file and Docker reproduces the same image every time. This module covers advanced commands and every Dockerfile instruction in detail.",
  sections: [
    {
      title: "docker diff — Inspecting Filesystem Changes",
      icon: "🔍",
      concepts: [
        {
          heading: "What It Does",
          body: `<code>docker diff</code> shows you exactly what changed inside a container's filesystem since it was created from its image. Every addition, modification, and deletion is tracked.`
        },
        {
          heading: "Output Symbols",
          body: `<strong>A</strong> — A file or directory was <strong>Added</strong><br/>
          <strong>C</strong> — A file or directory was <strong>Changed</strong> (modified)<br/>
          <strong>D</strong> — A file or directory was <strong>Deleted</strong>`
        }
      ],
      commands: [
        {
          label: "docker diff usage",
          lines: [
            { cmd: "docker diff mycontainer", explain: "Show all filesystem changes inside 'mycontainer' since it was started. Useful for auditing what an application or user changed inside a container." }
          ]
        }
      ]
    },
    {
      title: "docker commit — Saving Container State as an Image",
      icon: "💾",
      concepts: [
        {
          heading: "What It Does",
          body: `<code>docker commit</code> takes a snapshot of a container's current state — including all changes made since it started — and saves it as a new Docker image. This is useful when you've manually configured something inside a container and want to preserve it.`
        },
        {
          heading: "When to Use It",
          body: `Use <code>docker commit</code> for quick one-off captures. For repeatable, automated builds, always prefer a <strong>Dockerfile</strong> — it documents every step and can be version-controlled.`
        }
      ],
      commands: [
        {
          label: "docker commit usage",
          lines: [
            { cmd: "docker commit mycontainer my-custom-image", explain: "Create a new image called 'my-custom-image' from the current state of 'mycontainer'. Any files added, packages installed, or configs changed inside the container are now frozen into this new image." },
            { cmd: "docker images", explain: "Verify the new image appears in your local image list." }
          ]
        }
      ]
    },
    {
      title: "What is a Dockerfile?",
      icon: "📄",
      analogy: {
        icon: "🍳",
        label: "Analogy",
        text: "A Dockerfile is like a cooking recipe. It lists exact ingredients (base image, packages) and step-by-step instructions (commands to run). Anyone with the recipe can recreate the exact same dish (image) reliably and repeatedly."
      },
      concepts: [
        {
          heading: "How It Works",
          body: `A Dockerfile is a plain text file with no extension. You write instructions line by line. When you run <code>docker build</code>, Docker reads these instructions top-to-bottom, executing each one as a <strong>layer</strong> that gets added to the image. The final result is a complete, self-contained image.`
        }
      ]
    },
    {
      title: "Dockerfile Instructions — Every One Explained",
      icon: "📋",
      concepts: [
        {
          heading: "FROM — The Base Image",
          body: `<strong>Every Dockerfile must start with FROM.</strong> It specifies the starting point — the base image your new image builds on top of. Docker downloads this image first and starts stacking your instructions on it.<br/><br/>
          <code>FROM ubuntu</code> — Start with a minimal Ubuntu Linux environment<br/>
          <code>FROM ubuntu:22.04</code> — Specify an exact version (always preferred for reproducibility)<br/>
          <code>FROM python:3.11-slim</code> — Start with a minimal Python 3.11 environment`
        },
        {
          heading: "WORKDIR — Set the Working Directory",
          body: `Sets the <strong>current directory inside the container</strong> for all subsequent instructions (RUN, COPY, CMD). It's like running <code>cd /some/path</code> and staying there.<br/><br/>
          <code>WORKDIR /app</code> — All following commands execute from /app. If /app doesn't exist, Docker creates it automatically.`
        },
        {
          heading: "COPY — Copy Files from Host to Container",
          body: `Copies files or directories from your <strong>build context</strong> (the folder on your machine where you run docker build) into the container image.<br/><br/>
          <code>COPY hello.py /app/hello.py</code> — Copy a single file<br/>
          <code>COPY . /app/</code> — Copy everything in the current directory to /app/ inside the container`
        },
        {
          heading: "ADD — Like COPY But More Powerful",
          body: `ADD does everything COPY does, plus:<br/>
          — It can <strong>download files from a URL</strong> and add them to the image<br/>
          — It automatically <strong>extracts tar archives</strong> into the destination<br/><br/>
          <strong>Best practice:</strong> Use COPY for simple local file copies. Only use ADD when you specifically need URL downloading or auto-extraction.`
        },
        {
          heading: "RUN — Execute Commands During Build",
          body: `RUN executes a command <strong>during image building</strong> (not when the container starts). Each RUN creates a new layer in the image. It's used to install packages, create files, compile code, etc.<br/><br/>
          <code>RUN apt-get update && apt-get install -y python3</code><br/>
          The <code>&&</code> chains commands in a single RUN to minimize layers. The <code>-y</code> flag auto-answers 'yes' to installation prompts (needed because builds are non-interactive).`
        },
        {
          heading: "EXPOSE — Declare a Listening Port",
          body: `Documents which port the container's application listens on. <strong>Important: EXPOSE alone does NOT publish the port</strong> — it's just documentation/metadata. To actually make the port accessible from outside, you must use <code>-p</code> flag when running the container.<br/><br/>
          <code>EXPOSE 80</code> — Document that this container runs a web server on port 80`
        },
        {
          heading: "ENV — Environment Variables",
          body: `Sets environment variables inside the container that persist at runtime. Applications can read these values.<br/><br/>
          <code>ENV DATABASE_URL=postgres://localhost/mydb</code><br/>
          <code>ENV NODE_ENV=production</code>`
        },
        {
          heading: "CMD — Default Command at Startup",
          body: `Specifies the <strong>default command to run when a container starts</strong>. There can only be ONE CMD in a Dockerfile (the last one wins). Unlike RUN, CMD runs when the container starts — not during the build.<br/><br/>
          <code>CMD ["python3", "hello.py"]</code> — Preferred array form (avoids shell interpretation issues)<br/>
          <code>CMD python3 hello.py</code> — Shell form (runs through /bin/sh -c)`
        },
        {
          heading: "MAINTAINER — Author Information",
          body: `Metadata instruction declaring who created or maintains the image.<br/><br/>
          <code>MAINTAINER YourName youremail@example.com</code><br/>
          Note: Modern Docker uses LABEL instead, but MAINTAINER is still commonly seen in course materials.`
        }
      ]
    },
    {
      title: "Complete Dockerfile Examples",
      icon: "📝",
      commands: [
        {
          label: "Example 1 — Basic file operations",
          lines: [
            { cmd: "FROM ubuntu", explain: "Start from the Ubuntu base image." },
            { cmd: "WORKDIR /tmp", explain: "All subsequent commands run from /tmp inside the container." },
            { cmd: "RUN echo \"Hello World\" > /tmp/file1", explain: "During the build, create a file called file1 inside /tmp containing the text 'Hello World'." },
            { cmd: "ENV myname Faisal", explain: "Set an environment variable 'myname' to 'Faisal'. Any process running in the container can read this." },
            { cmd: "COPY file2 /tmp", explain: "Copy 'file2' from your build directory on the host machine into /tmp inside the container." }
          ]
        },
        {
          label: "Example 2 — Python app container",
          lines: [
            { cmd: "FROM ubuntu", explain: "Start from Ubuntu." },
            { cmd: "RUN apt-get update && apt-get install -y python3", explain: "Install Python 3 inside the image. This runs during build time. The && chains two commands into one layer." },
            { cmd: "COPY hello.py /tmp", explain: "Copy your Python script from the host into /tmp inside the image." },
            { cmd: "WORKDIR /tmp", explain: "Set the working directory to /tmp where our script lives." },
            { cmd: "CMD [\"python3\", \"hello.py\"]", explain: "When any container from this image starts, automatically run 'python3 hello.py'. This is the entry point of the application." }
          ]
        },
        {
          label: "Building and running the image",
          lines: [
            { cmd: "docker build -t myapp .", explain: "Build an image from the Dockerfile in the current directory (.) and tag/name it 'myapp'. The -t flag sets the image name. Docker reads the Dockerfile, executes each instruction, and creates a layered image." },
            { cmd: "docker run myapp", explain: "Start a container from the 'myapp' image. Since our Dockerfile has a CMD, it will automatically execute 'python3 hello.py'." },
            { cmd: "docker run -it myapp bash", explain: "Override the CMD and instead start a bash shell. Useful for debugging — you can explore the image's filesystem interactively." }
          ]
        }
      ]
    }
  ]
},
{
  id: 7,
  title: "Docker Volumes — Persistent Data",
  tag: "Module 07",
  intro: "By default, all data inside a container is lost when the container is deleted — like building a sandcastle that the tide washes away. Docker Volumes solve this by storing data outside the container in a managed location, so data survives container restarts, updates, and deletions.",
  sections: [
    {
      title: "Why Volumes Exist",
      icon: "🗂️",
      analogy: {
        icon: "🏖️",
        label: "Analogy",
        text: "Your container is a sandcastle on the beach. All the sand (data) is inside it. When the tide (container deletion) comes, everything washes away. A Docker Volume is a big pile of sand kept safely above the tide line. Your sandcastle can use sand from that pile, and even if the sandcastle is washed away, the pile remains untouched for next time."
      },
      concepts: [
        {
          heading: "The Core Problem Without Volumes",
          body: `A Docker container has a <strong>writable layer</strong> on top of its read-only image layers. Everything you write inside a running container goes into this writable layer. When you delete the container with <code>docker rm</code>, this writable layer — and all your data — is permanently deleted.`
        },
        {
          heading: "What Volumes Do",
          body: `Volumes are <strong>directories managed by Docker</strong>, stored on the host at <code>/var/lib/docker/volumes/</code>. When a container writes to a volume-mounted path, the data actually goes to this host location — outside the container's lifecycle. The container can be deleted and recreated, but the volume data persists.`
        },
        {
          heading: "Two Volume Patterns",
          body: `<strong>Container-to-Container sharing</strong> — Multiple containers mount the same volume. Useful for sharing files between services (e.g., a web server and a log processor sharing a log directory).<br/><br/>
          <strong>Host-to-Container mapping</strong> — A specific folder on your host machine is mounted into the container. Changes in either direction are immediately visible on both sides.`
        },
        {
          heading: "Critical Rule: Volumes Must Be Defined at Creation",
          body: `You <strong>cannot add a volume to an already running container</strong>. Volumes must be specified when you create the container with <code>docker run</code>. Plan your persistent data needs before starting containers.`
        }
      ]
    },
    {
      title: "Volume Commands Explained",
      icon: "💻",
      commands: [
        {
          label: "Creating and sharing volumes via CLI",
          lines: [
            { cmd: "docker run -it --name cont1 -v /myvolume ubuntu", explain: "Start container 'cont1' from the ubuntu image and create a volume mounted at /myvolume inside the container. Docker creates an anonymous volume at /var/lib/docker/volumes/ on the host. Anything written to /myvolume inside the container is persisted there." },
            { cmd: "docker run -it --name cont2 --volumes-from cont1 ubuntu", explain: "Start 'cont2' and mount all volumes from cont1. Both containers now share the same /myvolume — if cont1 writes a file there, cont2 can immediately see it. This is the container-to-container sharing pattern." }
          ]
        },
        {
          label: "Volume management commands",
          lines: [
            { cmd: "docker volume create mydata", explain: "Explicitly create a named volume called 'mydata'. Named volumes are easier to reference than anonymous ones. Docker stores it at /var/lib/docker/volumes/mydata/." },
            { cmd: "docker volume ls", explain: "List all Docker volumes on your system — both named and anonymous. Shows volume driver and name." },
            { cmd: "docker volume inspect mydata", explain: "Show detailed information about the 'mydata' volume: its full host path (Mountpoint), driver, creation date. Useful for finding where data is actually stored on your host." },
            { cmd: "docker volume prune", explain: "Remove all volumes that are NOT currently mounted to any container. This frees up disk space. WARNING: this permanently deletes the data in those volumes." },
            { cmd: "docker volume rm mydata", explain: "Remove a specific named volume. Will fail if any container (even stopped) still references this volume — remove the container first." },
            { cmd: "docker run -it --name cont3 -v mydata:/app/data ubuntu", explain: "Mount the named volume 'mydata' to /app/data inside the container. Everything written to /app/data in the container goes to the mydata volume on the host." }
          ]
        },
        {
          label: "Defining a volume in a Dockerfile",
          lines: [
            { cmd: "FROM ubuntu", explain: "Base image." },
            { cmd: "VOLUME [\"/app/data\"]", explain: "Declare /app/data as a volume mount point. When a container is created from this image, Docker automatically creates an anonymous volume and mounts it here — even if the user doesn't specify -v. This ensures data at this path is always persisted." }
          ]
        }
      ]
    }
  ]
},
{
  id: 8,
  title: "Docker Expose — Port Mapping",
  tag: "Module 08",
  intro: "Docker containers live in their own isolated network. By default, nothing outside the container can reach services running inside it. Port mapping (expose) creates a bridge between the container's internal ports and the host machine's ports — letting external users and services communicate with containerized applications.",
  sections: [
    {
      title: "Why Port Mapping is Needed",
      icon: "🚪",
      concepts: [
        {
          heading: "The Isolation Problem",
          body: `When Docker runs a container, it creates an <strong>isolated network namespace</strong> for it. The container gets its own virtual IP address (usually something like 172.17.0.2). Your host machine and the outside world cannot reach this private IP directly.<br/><br/>
          Think of it like a server room with no public entrance. You need to create a <strong>door</strong> (port mapping) that connects a public port on your host machine to a private port inside the container.`
        },
        {
          heading: "Port Mapping Format",
          body: `The format is <code>HOST_PORT:CONTAINER_PORT</code><br/><br/>
          <code>-p 8080:80</code> means:<br/>
          → Incoming traffic to host port <strong>8080</strong> is forwarded to container port <strong>80</strong><br/>
          → From outside: <code>http://your-server:8080</code> reaches whatever is listening on port 80 inside the container`
        }
      ]
    },
    {
      title: "Port Mapping Commands",
      icon: "🔀",
      commands: [
        {
          label: "Exposing ports via CLI",
          lines: [
            { cmd: "docker run -it --name my-cont -p 8080:80 ubuntu", explain: "Start a container named 'my-cont' from ubuntu. Map host port 8080 to container port 80. Any HTTP request to your machine on port 8080 is forwarded to whatever is running on port 80 inside the container." },
            { cmd: "docker port my-cont", explain: "Display the current port mappings for 'my-cont'. Shows which host ports are connected to which container ports." },
            { cmd: "docker run -d -p 80:80 -p 443:443 nginx", explain: "Run nginx in detached mode (-d = background), mapping both HTTP (80) and HTTPS (443). Multiple -p flags can be used to expose multiple ports simultaneously." }
          ]
        }
      ]
    },
    {
      title: "Full Apache Web Server Example",
      icon: "🌐",
      concepts: [
        {
          heading: "Goal",
          body: `Build a Docker image that runs the Apache2 web server inside a container, serving a simple HTML page. The server inside listens on port 80. We expose it so browsers can reach it.`
        }
      ],
      commands: [
        {
          label: "Dockerfile for Apache2 web server",
          lines: [
            { cmd: "FROM ubuntu:latest", explain: "Use the latest Ubuntu image as the base." },
            { cmd: "RUN apt-get update && apt-get install -y apache2", explain: "Update package lists and install Apache2 web server inside the image. This runs during build time." },
            { cmd: "WORKDIR /var/www/html", explain: "Set working directory to Apache's web root — where HTML files are served from." },
            { cmd: "RUN echo \"<h1>Welcome to the Dockerized Web Server</h1>\" > index.html", explain: "Create a minimal HTML file in Apache's web root. This becomes the homepage served by the container." },
            { cmd: "EXPOSE 80", explain: "Document that this container serves HTTP traffic on port 80. This is a declaration — not the actual port mapping. The real mapping happens when you run the container." },
            { cmd: "CMD [\"apache2ctl\", \"-D\", \"FOREGROUND\"]", explain: "When the container starts, run Apache in FOREGROUND mode. The -D FOREGROUND flag is critical — Docker containers run as long as their main process runs. Without FOREGROUND, Apache would start and immediately exit as a background daemon, causing the container to stop." }
          ]
        },
        {
          label: "Build and run the web server",
          lines: [
            { cmd: "docker build -t my-webserver .", explain: "Build the image from the Dockerfile in the current directory and name it 'my-webserver'." },
            { cmd: "docker run -d -p 8080:80 my-webserver", explain: "Run the web server container in detached mode (-d = background, doesn't block your terminal). Map host port 8080 to container port 80. Now open http://localhost:8080 in your browser to see the page." }
          ]
        }
      ]
    }
  ]
},
{
  id: 9,
  title: "Docker Hub & Docker Compose",
  tag: "Module 09",
  intro: "Docker Hub is the world's largest container registry — a public cloud where you share and discover images. Docker Compose goes a step further: instead of running containers one-by-one, it lets you define your entire multi-container application in a single YAML file and spin it all up with one command.",
  sections: [
    {
      title: "Docker Hub",
      icon: "☁️",
      analogy: {
        icon: "📦",
        label: "Analogy",
        text: "Docker Hub is to Docker images what GitHub is to code. Just as you push code to GitHub so others can clone it, you push Docker images to Docker Hub so others can pull and run them — anywhere in the world."
      },
      concepts: [
        {
          heading: "What is Docker Hub?",
          body: `Docker Hub (hub.docker.com) is a <strong>cloud-based image registry</strong> maintained by Docker Inc. It is the default location Docker looks when you run <code>docker pull</code> without specifying a registry.<br/><br/>
          It hosts:<br/>
          — <strong>Official images</strong> — Curated by Docker (ubuntu, nginx, python, postgres, etc.)<br/>
          — <strong>Verified publisher images</strong> — From trusted companies<br/>
          — <strong>Community images</strong> — From any user, including you`
        }
      ]
    },
    {
      title: "Publishing to Docker Hub",
      icon: "🚀",
      commands: [
        {
          label: "Push an image to Docker Hub",
          lines: [
            { cmd: "docker login", explain: "Authenticate with Docker Hub using your Docker ID and password. Required before pushing images. Your credentials are saved locally so you don't need to log in every time." },
            { cmd: "docker tag my-webserver yourdockerid/my-webserver", explain: "Tag your local image with your Docker Hub username prefix. Docker Hub requires images to be named as 'username/imagename'. This doesn't create a new image — it just adds a new name/alias to the existing one." },
            { cmd: "docker push yourdockerid/my-webserver", explain: "Upload the tagged image to Docker Hub. Docker uploads only the layers that aren't already on Hub, so subsequent pushes of updated images are fast." },
            { cmd: "docker pull yourdockerid/my-webserver", explain: "Download your image from Docker Hub onto any machine. Anyone with internet access can pull public images without logging in." },
            { cmd: "docker search nginx", explain: "Search Docker Hub for images matching 'nginx'. Shows image name, description, star count, and whether it's an official image." }
          ]
        }
      ]
    },
    {
      title: "What is Docker Compose?",
      icon: "🎼",
      analogy: {
        icon: "🎶",
        label: "Analogy",
        text: "Running containers one-by-one is like musicians practicing separately. Docker Compose is the conductor — one YAML score sheet describes every instrument (service), and the conductor brings them all in together with a single downbeat (docker-compose up)."
      },
      concepts: [
        {
          heading: "The Multi-Container Problem",
          body: `Real applications are not single containers. A typical web app needs:<br/>
          — A <strong>web server</strong> (nginx or Apache)<br/>
          — An <strong>application server</strong> (Python Flask, Node.js)<br/>
          — A <strong>database</strong> (PostgreSQL, MySQL)<br/>
          — A <strong>cache</strong> (Redis)<br/><br/>
          Without Compose, you'd start each one manually with a separate <code>docker run</code> command, handle networking between them, set environment variables, and manage volumes — all by hand. One mistake and nothing connects.`
        },
        {
          heading: "How Docker Compose Works",
          body: `You write a single <code>docker-compose.yml</code> file that declaratively describes all services, their images, ports, volumes, environment variables, and how they depend on each other. Then:<br/><br/>
          <code>docker-compose up</code> — Docker reads the file and starts every service in the right order<br/>
          <code>docker-compose down</code> — Stops and removes all containers, networks, and volumes it created`
        }
      ]
    },
    {
      title: "docker-compose.yml — Structure Explained",
      icon: "📄",
      commands: [
        {
          label: "Example: Web app + PostgreSQL + Redis",
          lines: [
            { cmd: "version: '3.8'", explain: "The Compose file format version. Use '3.8' for modern Docker versions." },
            { cmd: "services:", explain: "The top-level key where you define each container (called 'service')." },
            { cmd: "  web:", explain: "Define a service named 'web'. The indentation (2 spaces) is critical in YAML." },
            { cmd: "    image: nginx:latest", explain: "This service uses the official nginx image from Docker Hub." },
            { cmd: "    ports:", explain: "Port mappings for this service — same as -p in docker run." },
            { cmd: "      - \"8080:80\"", explain: "Map host port 8080 to container port 80." },
            { cmd: "    depends_on:", explain: "Specify that 'web' depends on 'db' — Compose starts 'db' before 'web'." },
            { cmd: "      - db", explain: "The name of the service this one depends on." },
            { cmd: "  db:", explain: "Define a second service named 'db' (the database)." },
            { cmd: "    image: postgres:15", explain: "Use PostgreSQL 15 as the database image." },
            { cmd: "    environment:", explain: "Set environment variables inside the db container." },
            { cmd: "      POSTGRES_PASSWORD: mysecretpassword", explain: "The PostgreSQL image reads this env var to set the database root password at startup." },
            { cmd: "    volumes:", explain: "Attach volumes to persist the database data." },
            { cmd: "      - db-data:/var/lib/postgresql/data", explain: "Mount the named volume 'db-data' to PostgreSQL's data directory. Database tables survive container restarts." },
            { cmd: "volumes:", explain: "Top-level volumes section — declare named volumes used by services." },
            { cmd: "  db-data:", explain: "Declare 'db-data' as a managed Docker volume. Compose creates it automatically if it doesn't exist." }
          ]
        },
        {
          label: "Running Docker Compose",
          lines: [
            { cmd: "docker-compose up", explain: "Read docker-compose.yml, create all networks and volumes, pull any missing images, and start all services. Runs in the foreground — you see all logs." },
            { cmd: "docker-compose up -d", explain: "Same but runs in detached mode (background). Your terminal is free." },
            { cmd: "docker-compose down", explain: "Stop all services and remove their containers and the network Compose created. Named volumes are preserved by default." },
            { cmd: "docker-compose down -v", explain: "Stop and remove everything including volumes. WARNING: This deletes database data and any other persistent volume data." },
            { cmd: "docker-compose logs web", explain: "View the logs from the 'web' service specifically." },
            { cmd: "docker-compose ps", explain: "List all containers managed by this Compose file and their status." }
          ]
        }
      ]
    }
  ]
},
{
  id: 10,
  title: "Kubernetes — Container Orchestration",
  tag: "Module 10",
  intro: "Docker runs containers on one machine. But what happens when your app needs to run across hundreds of machines, auto-scale during traffic spikes, recover from crashes automatically, and balance load between instances? That's where Kubernetes (k8s) comes in — it's the operating system for your cluster of machines.",
  sections: [
    {
      title: "Why Kubernetes Exists",
      icon: "🤔",
      analogy: {
        icon: "🏭",
        label: "Analogy",
        text: "Docker is like a single factory worker who can assemble products (containers). Kubernetes is the factory manager who assigns workers to tasks, replaces workers who get sick, scales up the workforce during busy periods, and ensures products keep moving off the line with zero downtime."
      },
      concepts: [
        {
          heading: "The Problem at Scale",
          body: `Docker alone works for one machine. In production, you might have:<br/>
          — 100+ containers spread across 20 servers<br/>
          — Traffic that spikes 10x during peak hours<br/>
          — Containers that crash and need restarting<br/>
          — New versions that need rolling deployment without downtime<br/><br/>
          Managing this manually is infeasible. Kubernetes automates all of it.`
        },
        {
          heading: "Real-World Proof: Pokémon Go",
          body: `Pokémon Go launched in 2016 expecting 1x traffic. Within 15 minutes of launch in Australia, traffic surged far beyond any estimate — and they scaled to 50x expectations. The app ran on <strong>Google Container Engine (GKE), powered by Kubernetes</strong>. Without Kubernetes' automatic scaling, the app would have crashed under the load.`
        },
        {
          heading: "Kubernetes History",
          body: `Kubernetes was built by Google engineers based on their internal container system called <strong>Borg</strong> — which powers Google's own infrastructure (2+ billion container deployments per week). Google open-sourced Kubernetes in 2014. The name is Greek for "helmsman" or "pilot" — hence the ship-wheel logo. The 7 spokes reference its original project name: "Project Seven of Nine."`
        }
      ]
    },
    {
      title: "Kubernetes Cluster Architecture",
      icon: "🏗️",
      concepts: [
        {
          heading: "What is a Cluster?",
          body: `A Kubernetes <strong>cluster</strong> is a group of machines (physical or virtual) working together as one system. Every cluster has:<br/><br/>
          <strong>Master Node (Control Plane)</strong> — One or more machines that manage the entire cluster. Makes decisions about scheduling, monitors health, and responds to events.<br/><br/>
          <strong>Worker Nodes</strong> — The machines that actually run your containers. Could be VMs in a cloud or physical servers in a data center.`
        }
      ]
    },
    {
      title: "Control Plane Components (Master Node)",
      icon: "🧠",
      concepts: [
        {
          heading: "1. API Server",
          body: `The <strong>front door of Kubernetes</strong>. Every interaction with the cluster goes through the API Server — whether from <code>kubectl</code> (the CLI), a dashboard, or another application.<br/><br/>
          It handles:<br/>
          — <strong>Authentication</strong> — Verifies who you are<br/>
          — <strong>Authorization</strong> — Checks if you have permission to do what you're asking<br/>
          — <strong>Admission Control</strong> — Validates requests against cluster policies<br/>
          — <strong>State Persistence</strong> — Saves the desired state to etcd`
        },
        {
          heading: "2. Scheduler",
          body: `The Scheduler decides <strong>which worker node a new container/pod runs on</strong>. It doesn't run containers itself — it just makes placement decisions.<br/><br/>
          It considers:<br/>
          — Current resource usage on each node (CPU, memory)<br/>
          — The pod's resource requests and limits<br/>
          — Data locality preferences<br/>
          — Quality of service requirements<br/><br/>
          Think of it like a hotel receptionist who assigns rooms (nodes) based on availability and guest preferences.`
        },
        {
          heading: "3. Controller Manager",
          body: `A daemon that runs a collection of <strong>controllers</strong> — each controller watches a specific type of Kubernetes object and ensures its <strong>actual state matches the desired state</strong>.<br/><br/>
          For example, the <em>ReplicaSet controller</em> watches pod counts. If you said "I want 3 replicas of my app" and one crashes, the controller notices (actual=2, desired=3) and instructs the API server to create a new pod.<br/><br/>
          This self-healing loop is what makes Kubernetes reliable.`
        },
        {
          heading: "4. etcd",
          body: `A <strong>distributed key-value database</strong> that stores the entire state of the cluster. Everything Kubernetes knows — all pod specs, service configurations, secrets, deployments — lives in etcd.<br/><br/>
          If etcd loses data, the cluster loses its mind. This is why production clusters always replicate etcd across 3+ nodes for high availability.`
        }
      ]
    },
    {
      title: "Worker Node Components",
      icon: "⚙️",
      concepts: [
        {
          heading: "Container Runtime Engine",
          body: `The software responsible for <strong>actually starting and stopping containers</strong> on the node. Kubernetes supports any OCI-compliant runtime:<br/>
          — <strong>Docker</strong> — Most familiar<br/>
          — <strong>containerd</strong> — Lighter, now the default in many clusters<br/>
          — <strong>rkt</strong> — Red Hat's alternative<br/><br/>
          Kubernetes doesn't care which runtime you use — it communicates through a standard interface (CRI).`
        },
        {
          heading: "Kubelet",
          body: `An <strong>agent running on every worker node</strong> that communicates with the master. It is Kubernetes' representative on the node.<br/><br/>
          It receives <strong>Pod specifications</strong> (PodSpecs) from the API server — descriptions of which containers to run with what resources. It then ensures those containers are running and healthy, restarting them if they crash.`
        },
        {
          heading: "Kube-proxy",
          body: `A <strong>network proxy on every node</strong> that handles all networking for containers on that node. It:<br/>
          — Routes traffic to the correct pod/container<br/>
          — Implements <strong>load balancing</strong> — if 3 replicas of a service exist, kube-proxy distributes requests across all 3<br/>
          — Manages both inbound traffic from outside the cluster and internal communication between pods`
        },
        {
          heading: "cAdvisor",
          body: `An open-source <strong>resource monitoring agent built into kubelet</strong>. It continuously collects metrics from every container:<br/>
          — CPU usage<br/>
          — Memory consumption<br/>
          — Filesystem I/O<br/>
          — Network traffic<br/><br/>
          These metrics feed into autoscaling decisions and monitoring dashboards.`
        }
      ]
    },
    {
      title: "Pods — The Basic Unit",
      icon: "🫛",
      concepts: [
        {
          heading: "What is a Pod?",
          body: `A Pod is the <strong>smallest deployable unit in Kubernetes</strong> — not a container. A Pod wraps one or more containers that:<br/>
          — Share the same network namespace (they can communicate via localhost)<br/>
          — Share the same storage volumes<br/>
          — Always run together on the same node<br/><br/>
          Most Pods contain exactly one container. Multi-container Pods are used for "sidecar" patterns — e.g., a main app container + a logging agent container.`
        },
        {
          heading: "Horizontal Autoscaling",
          body: `Pods can be <strong>automatically scaled horizontally</strong> — Kubernetes creates more replicas of a Pod when load increases and removes them when load decreases. The <strong>Horizontal Pod Autoscaler (HPA)</strong> monitors metrics (usually CPU usage) and adjusts the replica count automatically.`
        }
      ]
    },
    {
      title: "Deployments — Managing Pods at Scale",
      icon: "🚀",
      concepts: [
        {
          heading: "What is a Deployment?",
          body: `A Deployment is a Kubernetes object that <strong>declaratively manages a set of Pods</strong>. You tell Kubernetes: "I want 3 replicas of my app always running." The Deployment controller ensures this is always true.`
        },
        {
          heading: "What Deployments Handle",
          body: `<ul>
            <li><strong>Scaling</strong> — Scale from 3 to 10 replicas instantly</li>
            <li><strong>Rolling Updates</strong> — Update to a new image version gradually — one pod at a time — with no downtime</li>
            <li><strong>Rollback</strong> — If a new version is broken, instantly roll back to the previous version with one command</li>
            <li><strong>Self-Healing</strong> — If a pod crashes, the Deployment automatically creates a replacement</li>
          </ul>`
        },
        {
          heading: "Without Kubernetes vs. With Kubernetes",
          body: `<strong>Without Kubernetes:</strong> You write custom scripts to restart crashed containers, monitor every node manually, implement your own load balancing, and carefully orchestrate rolling deployments — all error-prone and time-consuming.<br/><br/>
          <strong>With Kubernetes:</strong> Declare your desired state in a YAML file. Kubernetes continuously reconciles reality with your declaration — automatically, reliably, at any scale.`
        }
      ]
    }
  ]
}
]; // END OF MODULES ARRAY
