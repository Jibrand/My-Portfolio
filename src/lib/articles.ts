export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  sections: { id: string; title: string; paragraphs: string[]; bullets?: string[] }[];
  sources: { label: string; href: string }[];
  relatedProjects: string[];
  experienceAnchor: string;
};

export const articles: Article[] = [
  {
    slug: "what-does-a-product-engineer-do",
    title: "What does a product engineer do in a startup?",
    description: "A practical guide to product engineering, from defining a useful feature to full-stack delivery, deployment, and feedback. By Muhammad Jibran.",
    category: "Product engineering",
    published: "2026-11-07",
    experienceAnchor: "experience",
    relatedProjects: ["chairbooked", "toolstalk-admin"],
    sections: [
      {
        id: "owning-the-outcome",
        title: "Product engineering starts with the workflow",
        paragraphs: [
          "A product engineer connects a user's problem to working software. The work includes understanding the workflow, making technical decisions, building the interface and backend, and checking whether the result helps the user finish their task. In a small startup, those responsibilities often sit with the same person.",
          "My work as technical lead at SalesGuard included architecture, frontend and backend development, and AI automation for sales workflows. That combination is why I describe my work as product engineering. A feature is useful when the whole path works, including the less visible parts such as permissions, integrations, and deployment.",
          "Consider appointment booking for a service business. The useful outcome is a customer securing the right appointment and the business receiving accurate details. A calendar screen is only one part of that outcome. Availability, confirmation emails, conflicting bookings, and cancellation handling all affect whether the product works.",
        ],
      },
      {
        id: "product-and-full-stack",
        title: "How product engineering relates to full-stack development",
        paragraphs: [
          "Full-stack development describes working across the frontend and backend. Product engineering adds responsibility for deciding what should be built and how to evaluate it. The two overlap considerably. A full-stack engineer can also be a product engineer when their work includes shaping the feature and following its use after release.",
          "The distinction is useful when hiring. A founder who needs someone to implement an agreed specification should describe that specification clearly. A founder who needs help turning a rough problem into a usable product should also discuss customer context, tradeoffs, and how decisions will be made.",
        ],
      },
      {
        id: "define-a-small-release",
        title: "Define a small release with observable behavior",
        paragraphs: [
          "Before choosing a framework or an AI model, write down one user journey. Identify the starting event, the information required, the action taken, and the visible result. Then describe the failure paths. This gives the team something more concrete to review than a long list of features.",
          "For the booking example, a useful first release might let a customer choose an available slot, submit their details, and receive a confirmation. Analytics and more elaborate automation can follow once that journey is dependable.",
        ],
        bullets: [
          "Name the person using the feature and the task they want to complete.",
          "Agree on the smallest useful end-to-end journey.",
          "Identify payments, personal data, and actions that need explicit confirmation.",
          "Define how the team will recognize a successful and a failed attempt.",
        ],
      },
      {
        id: "shipping-and-operating",
        title: "Shipping includes operating the product",
        paragraphs: [
          "A release also needs a deployment process, configuration management, and enough visibility to investigate failures. My engineering work at HACKERverse included backend APIs, AWS infrastructure, and CI/CD. Those responsibilities made deployment and operations part of delivering the product.",
          "For a small team, a release checklist can be straightforward. Verify the user journey in the deployment environment, test an unauthorized request, check the behavior when an integration fails, and establish a way to return to the previous release. The amount of infrastructure should match the product's actual requirements.",
        ],
      },
      {
        id: "hiring-a-product-engineer",
        title: "What to ask a product engineer before working together",
        paragraphs: [
          "Ask candidates to walk through a real project. Explore the original problem, the decisions they owned, the implementation they delivered, and what they would change. A useful discussion makes the relationship between user needs and engineering choices visible.",
          "My portfolio includes ChairBooked, which combines booking and customer workflows, and ToolsTalk Admin, which covers dashboard interactions and validation. Explore those project descriptions and available demos to see the kinds of applications I work on.",
        ],
      },
    ],
    sources: [],
  },
  {
    slug: "voice-ai-workflow-automation-saas",
    title: "How voice AI workflow automation works in a SaaS app",
    description: "Understand the path from recorded speech to a confirmed SaaS action, including transcription, intent validation, permissions, and retry handling.",
    category: "Voice AI",
    published: "2026-11-07",
    experienceAnchor: "experience",
    relatedProjects: ["chairbooked", "email-automation"],
    sections: [
      {
        id: "speech-to-action",
        title: "Connect speech to a specific product action",
        paragraphs: [
          "Voice AI workflow automation lets a person describe a task aloud and have software turn that request into an application action. In a SaaS workspace, examples include creating a task, preparing an invoice, or sending a message. Each request needs to become a precise operation in the product's existing data and permission model.",
          "At Plutio, I built voice-driven workflows inside an Electron desktop application. The work included shortcut-activated recording, transcription, AI intent processing, and workspace actions. The architecture below describes design considerations for this class of system, including how to handle uncertain input and failed operations.",
        ],
      },
      {
        id: "capture-and-transcribe",
        title: "Capture audio and make the transcript visible",
        paragraphs: [
          "A recording interface should make its state clear. The user needs to know when recording starts, how to stop it, and whether the application is processing the audio. Microphone permissions and a cancellation path belong in the core interaction.",
          "A speech-recognition system converts the recording to text. Whisper is one option and supports tasks including multilingual speech recognition. Transcription quality still needs evaluation with the microphones, accents, background noise, and vocabulary of the actual users.",
          "Show the recognized request when it affects the action being performed. If a person says a client's name or an amount, they should have a chance to catch a transcription mistake before an externally visible or financial action proceeds.",
        ],
      },
      {
        id: "validate-intent",
        title: "Turn intent into validated application input",
        paragraphs: [
          "An intent-processing layer maps the transcript to an allowed operation and extracts its arguments. For an invoice, those arguments might include the customer, currency, and line items. For a task, they might include an assignee and a due date. Keep the list of available operations explicit.",
          "Treat the parsed result as untrusted input. Validate the required fields, resolve names to records the current user can access, and check authorization on the server. If two customers have similar names, ask the user to choose. A guessed identity can turn a convenient shortcut into a costly error.",
        ],
        bullets: [
          "Validate argument types, required fields, and allowed values.",
          "Resolve ambiguous people, customers, and workspace records.",
          "Check the current user's permissions at execution time.",
          "Ask for confirmation before sending, charging, or making another consequential change.",
        ],
      },
      {
        id: "retries-and-feedback",
        title: "Handle retries without repeating the business action",
        paragraphs: [
          "The speech-processing step and the application action can fail independently. A request may time out even after the application has created the invoice or task. Retrying the whole pipeline without tracking the operation can create duplicate records.",
          "Use a durable operation identifier and record the result of an action. Retry only where it is appropriate. AWS's retry-with-backoff guidance describes spacing out retries for transient failures and warns that retried operations need idempotent behavior. Translate that principle into the application's own action-handling design.",
          "The final response should describe what actually happened. Distinguish a prepared draft from a sent invoice, and distinguish a confirmed failure from an unknown result. Give the user a link to the created record when one is available.",
        ],
      },
      {
        id: "evaluate-the-whole-workflow",
        title: "Evaluate successful tasks as well as transcripts",
        paragraphs: [
          "A transcript can look correct while the workflow still fails. Evaluate the whole journey with representative requests, including unclear names, missing amounts, canceled recordings, expired sessions, and unavailable integrations. Record enough diagnostic information to investigate a failure while limiting the personal data retained.",
          "A good first voice feature covers a small set of actions with clear outcomes. Once those actions are dependable, the same recording and validation pipeline can support additional workflows. The product becomes easier to use when each new action follows a familiar confirmation and feedback pattern.",
        ],
      },
    ],
    sources: [
      { label: "Whisper speech-recognition documentation", href: "https://github.com/openai/whisper" },
      { label: "AWS guidance on retries and backoff", href: "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/retry-backoff.html" },
    ],
  },
  {
    slug: "company-policy-chatbot-rag",
    title: "Building a company-policy chatbot with RAG",
    description: "A practical RAG design guide for company-policy questions, covering document ownership, retrieval, source citations, access control, and evaluation.",
    category: "AI engineering",
    published: "2026-11-07",
    experienceAnchor: "skills",
    relatedProjects: ["inboxhr", "privacyguard-piifuse"],
    sections: [
      {
        id: "what-rag-does",
        title: "What retrieval-augmented generation adds",
        paragraphs: [
          "A company-policy chatbot needs to answer questions from an organization's own information. A general language model cannot reliably know a particular employer's current leave policy or onboarding procedure. Retrieval-augmented generation, usually called RAG, retrieves relevant source material and supplies it as context for an answer.",
          "InboxHR, one of the projects in my portfolio, includes an AI chatbot for company-policy questions alongside onboarding automation and HR workflows. The checklist here describes a way to design this kind of assistant. It is guidance for a policy chatbot, rather than a claim about InboxHR's private implementation.",
          "The key product behavior is simple. When the system has suitable evidence, it should answer from that evidence and show where it came from. When the evidence is missing or contradictory, it should explain the gap and direct the employee to an appropriate next step.",
        ],
      },
      {
        id: "own-the-source",
        title: "Start with approved documents and ownership",
        paragraphs: [
          "Decide which documents are authoritative before building an index. A draft handbook, an old PDF, and a current policy page can contain different answers to the same question. Document ownership and revision dates help determine which source should be used.",
          "Preserve metadata such as organization, document identifier, section, version, and access group. Divide documents along meaningful boundaries, keeping a policy condition near the rule it qualifies. For example, separating a leave entitlement from its eligibility conditions can produce an answer that sounds correct but applies to the wrong employee.",
        ],
      },
      {
        id: "retrieval-and-permissions",
        title: "Retrieve evidence within the user's access scope",
        paragraphs: [
          "Retrieval narrows a larger collection to the information relevant to a question. LangChain's retrieval documentation describes both two-step and agent-driven approaches. The right design depends on how predictable the request is and how much flexibility the workflow needs.",
          "For a policy assistant, establish an understandable baseline before adding complex orchestration. Retrieve candidate passages, examine whether they answer the question, and pass the selected evidence into the answer step. Inspect real retrieval results when evaluating the system, because an answer cannot be grounded in a policy the retriever never found.",
          "Apply access restrictions before documents enter the model's context. A chatbot serving multiple organizations must scope retrieval to the authorized organization and user. Hiding a source link after generating the answer does not undo disclosure of its contents.",
        ],
      },
      {
        id: "answers-and-citations",
        title: "Make source references part of the interface",
        paragraphs: [
          "Ask the system to tie its answer to the retrieved material, then present useful source references. A citation should open the document or section supporting the statement. The interface should help a person verify an answer about a policy that affects them.",
          "Define the behavior for missing evidence. For example, if the documents do not explain how a regional holiday affects leave, the assistant should report that limitation and identify a support route. It should avoid filling the gap with a plausible policy from another organization or jurisdiction.",
        ],
        bullets: [
          "Show the source document and relevant section.",
          "Keep exceptions and eligibility conditions in the answer.",
          "Explain when the available policy does not answer the question.",
          "Provide a human contact or established support workflow for unresolved cases.",
        ],
      },
      {
        id: "evaluate-and-maintain",
        title: "Evaluate policy changes and difficult questions",
        paragraphs: [
          "Build an evaluation set with the people responsible for the policy. Include routine questions, ambiguous wording, outdated documents, contradictory passages, and users who should not have access to a document. Review retrieval quality and the final answer separately so that a failure can be traced to the correct stage.",
          "Updates need an operational process too. When a policy changes, replace or re-index its source material and check that old passages are no longer being retrieved. The ongoing ownership of the source collection is as important as the initial model integration.",
          "For related work, explore InboxHR's HR workflow capabilities and PrivacyGuard's approach to detecting and redacting personal information before it reaches downstream systems.",
        ],
      },
    ],
    sources: [
      { label: "LangChain retrieval documentation", href: "https://docs.langchain.com/oss/python/deepagents/retrieval" },
    ],
  },
];

export function readingMinutes(article: Article) {
  const words = article.sections.flatMap(({ paragraphs, bullets }) => [...paragraphs, ...(bullets ?? [])]).join(" ").split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
