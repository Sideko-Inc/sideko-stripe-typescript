import {
  External$IssuingCardAuthorizationControls,
  IssuingCardAuthorizationControls,
  Schemas$IssuingCardAuthorizationControls,
} from "./issuing-card-authorization-controls";
import {
  External$IssuingCardMetadata,
  IssuingCardMetadata,
  Schemas$IssuingCardMetadata,
} from "./issuing-card-metadata";
import {
  External$IssuingCardShipping,
  IssuingCardShipping,
  Schemas$IssuingCardShipping,
} from "./issuing-card-shipping";
import {
  External$IssuingCardWallets,
  IssuingCardWallets,
  Schemas$IssuingCardWallets,
} from "./issuing-card-wallets";
import {
  External$IssuingCardholder,
  IssuingCardholder,
  Schemas$IssuingCardholder,
} from "./issuing-cardholder";
import {
  External$IssuingPersonalizationDesign,
  IssuingPersonalizationDesign,
  Schemas$IssuingPersonalizationDesign,
} from "./issuing-personalization-design";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * You can [create physical or virtual cards](https://stripe.com/docs/issuing) that are issued to cardholders.
 */
export type IssuingCard = {
  /**
   * The brand of the card.
   */
  brand: string;
  /**
   * The reason why the card was canceled.
   */
  cancellationReason?:
    | ("design_rejected" | "lost" | "stolen")
    | null
    | undefined;
  /**
   * An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://stripe.com/docs/issuing) cards.
   *
   * Related guide: [How to create a cardholder](https://stripe.com/docs/issuing/cards/virtual/issue-cards#create-cardholder)
   */
  cardholder: IssuingCardholder;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Supported currencies are `usd` in the US, `eur` in the EU, and `gbp` in the UK.
   */
  currency: string;
  /**
   * The card's CVC. For security reasons, this is only available for virtual cards, and will be omitted unless you explicitly request it with [the `expand` parameter](https://stripe.com/docs/api/expanding_objects). Additionally, it's only available via the ["Retrieve a card" endpoint](https://stripe.com/docs/api/issuing/cards/retrieve), not via "List all cards" or any other endpoint.
   */
  cvc?: string | undefined;
  /**
   * The expiration month of the card.
   */
  expMonth: number;
  /**
   * The expiration year of the card.
   */
  expYear: number;
  /**
   * The financial account this card is attached to.
   */
  financialAccount?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The last 4 digits of the card number.
   */
  last4: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: IssuingCardMetadata;
  /**
   * The full unredacted card number. For security reasons, this is only available for virtual cards, and will be omitted unless you explicitly request it with [the `expand` parameter](https://stripe.com/docs/api/expanding_objects). Additionally, it's only available via the ["Retrieve a card" endpoint](https://stripe.com/docs/api/issuing/cards/retrieve), not via "List all cards" or any other endpoint.
   */
  number?: string | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "issuing.card";
  /**
   * The personalization design object belonging to this card.
   */
  personalizationDesign?: (string | IssuingPersonalizationDesign) | undefined;
  /**
   * The latest card that replaces this card, if any.
   */
  replacedBy?: (string | IssuingCard) | undefined;
  /**
   * The card this card replaces, if any.
   */
  replacementFor?: (string | IssuingCard) | undefined;
  /**
   * The reason why the previous card needed to be replaced.
   */
  replacementReason?:
    | ("damaged" | "expired" | "lost" | "stolen")
    | null
    | undefined;
  shipping?: IssuingCardShipping | undefined;
  spendingControls: IssuingCardAuthorizationControls;
  /**
   * Whether authorizations can be approved on this card. May be blocked from activating cards depending on past-due Cardholder requirements. Defaults to `inactive`.
   */
  status: "active" | "canceled" | "inactive";
  /**
   * The type of the card.
   */
  type: "physical" | "virtual";
  wallets?: IssuingCardWallets | undefined;
};

/**
 * @internal
 * IssuingCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCard = {
  brand: string;
  cancellation_reason?:
    | ("design_rejected" | "lost" | "stolen")
    | null
    | undefined;
  cardholder: External$IssuingCardholder;
  created: number;
  currency: string;
  cvc?: string | undefined;
  exp_month: number;
  exp_year: number;
  financial_account?: string | null | undefined;
  id: string;
  last4: string;
  livemode: boolean;
  metadata: External$IssuingCardMetadata;
  number?: string | undefined;
  object: "issuing.card";
  personalization_design?:
    | (string | External$IssuingPersonalizationDesign)
    | undefined;
  replaced_by?: (string | External$IssuingCard) | undefined;
  replacement_for?: (string | External$IssuingCard) | undefined;
  replacement_reason?:
    | ("damaged" | "expired" | "lost" | "stolen")
    | null
    | undefined;
  shipping?: External$IssuingCardShipping | undefined;
  spending_controls: External$IssuingCardAuthorizationControls;
  status: "active" | "canceled" | "inactive";
  type: "physical" | "virtual";
  wallets?: External$IssuingCardWallets | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCard
 */
const SchemaIn$IssuingCard: z.ZodType<
  IssuingCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    brand: z.string(),
    cancellation_reason: z
      .enum(["design_rejected", "lost", "stolen"])
      .nullable()
      .optional(),
    cardholder: z.lazy(() => Schemas$IssuingCardholder.in),
    created: z.number().int(),
    currency: z.string(),
    cvc: z.string().optional(),
    exp_month: z.number().int(),
    exp_year: z.number().int(),
    financial_account: z.string().nullable().optional(),
    id: z.string(),
    last4: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$IssuingCardMetadata.in,
    number: z.string().optional(),
    object: z.enum(["issuing.card"]),
    personalization_design: z
      .union([
        z.string(),
        z.lazy(() => Schemas$IssuingPersonalizationDesign.in),
      ])
      .optional(),
    replaced_by: z
      .union([z.string(), z.lazy(() => Schemas$IssuingCard.in)])
      .optional(),
    replacement_for: z
      .union([z.string(), z.lazy(() => Schemas$IssuingCard.in)])
      .optional(),
    replacement_reason: z
      .enum(["damaged", "expired", "lost", "stolen"])
      .nullable()
      .optional(),
    shipping: Schemas$IssuingCardShipping.in.optional(),
    spending_controls: Schemas$IssuingCardAuthorizationControls.in,
    status: z.enum(["active", "canceled", "inactive"]),
    type: z.enum(["physical", "virtual"]),
    wallets: Schemas$IssuingCardWallets.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      cancellation_reason: "cancellationReason",
      cardholder: "cardholder",
      created: "created",
      currency: "currency",
      cvc: "cvc",
      exp_month: "expMonth",
      exp_year: "expYear",
      financial_account: "financialAccount",
      id: "id",
      last4: "last4",
      livemode: "livemode",
      metadata: "metadata",
      number: "number",
      object: "object",
      personalization_design: "personalizationDesign",
      replaced_by: "replacedBy",
      replacement_for: "replacementFor",
      replacement_reason: "replacementReason",
      shipping: "shipping",
      spending_controls: "spendingControls",
      status: "status",
      type: "type",
      wallets: "wallets",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCard
 */
const SchemaOut$IssuingCard: z.ZodType<
  External$IssuingCard, // output type of this zod object
  z.ZodTypeDef,
  IssuingCard // the object to be transformed
> = z
  .object({
    brand: z.string(),
    cancellationReason: z
      .enum(["design_rejected", "lost", "stolen"])
      .nullable()
      .optional(),
    cardholder: z.lazy(() => Schemas$IssuingCardholder.out),
    created: z.number().int(),
    currency: z.string(),
    cvc: z.string().optional(),
    expMonth: z.number().int(),
    expYear: z.number().int(),
    financialAccount: z.string().nullable().optional(),
    id: z.string(),
    last4: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$IssuingCardMetadata.out,
    number: z.string().optional(),
    object: z.enum(["issuing.card"]),
    personalizationDesign: z
      .union([
        z.string(),
        z.lazy(() => Schemas$IssuingPersonalizationDesign.out),
      ])
      .optional(),
    replacedBy: z
      .union([z.string(), z.lazy(() => Schemas$IssuingCard.out)])
      .optional(),
    replacementFor: z
      .union([z.string(), z.lazy(() => Schemas$IssuingCard.out)])
      .optional(),
    replacementReason: z
      .enum(["damaged", "expired", "lost", "stolen"])
      .nullable()
      .optional(),
    shipping: Schemas$IssuingCardShipping.out.optional(),
    spendingControls: Schemas$IssuingCardAuthorizationControls.out,
    status: z.enum(["active", "canceled", "inactive"]),
    type: z.enum(["physical", "virtual"]),
    wallets: Schemas$IssuingCardWallets.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      cancellationReason: "cancellation_reason",
      cardholder: "cardholder",
      created: "created",
      currency: "currency",
      cvc: "cvc",
      expMonth: "exp_month",
      expYear: "exp_year",
      financialAccount: "financial_account",
      id: "id",
      last4: "last4",
      livemode: "livemode",
      metadata: "metadata",
      number: "number",
      object: "object",
      personalizationDesign: "personalization_design",
      replacedBy: "replaced_by",
      replacementFor: "replacement_for",
      replacementReason: "replacement_reason",
      shipping: "shipping",
      spendingControls: "spending_controls",
      status: "status",
      type: "type",
      wallets: "wallets",
    });
  });

export const Schemas$IssuingCard = {
  in: SchemaIn$IssuingCard,
  out: SchemaOut$IssuingCard,
};
