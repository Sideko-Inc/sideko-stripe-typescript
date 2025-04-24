import {
  External$SourceCreateBodyMandate,
  Schemas$SourceCreateBodyMandate,
  SourceCreateBodyMandate,
} from "./source-create-body-mandate";
import {
  External$SourceCreateBodyMetadata,
  Schemas$SourceCreateBodyMetadata,
  SourceCreateBodyMetadata,
} from "./source-create-body-metadata";
import {
  External$SourceCreateBodyOwner,
  Schemas$SourceCreateBodyOwner,
  SourceCreateBodyOwner,
} from "./source-create-body-owner";
import {
  External$SourceCreateBodyReceiver,
  Schemas$SourceCreateBodyReceiver,
  SourceCreateBodyReceiver,
} from "./source-create-body-receiver";
import {
  External$SourceCreateBodyRedirect,
  Schemas$SourceCreateBodyRedirect,
  SourceCreateBodyRedirect,
} from "./source-create-body-redirect";
import {
  External$SourceCreateBodySourceOrder,
  Schemas$SourceCreateBodySourceOrder,
  SourceCreateBodySourceOrder,
} from "./source-create-body-source-order";
import { types } from "@sideko-inc/stripe";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceCreateBody
 */
export type SourceCreateBody = {
  /**
   * Amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources. Not supported for `receiver` type sources, where charge amount may not be specified until funds land.
   */
  amount?: number | undefined;
  /**
   * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready.
   */
  currency?: string | undefined;
  /**
   * The `Customer` to whom the original source is attached to. Must be set when the original source is not a `Source` (e.g., `Card`).
   */
  customer?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The authentication `flow` of the source to create. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`. It is generally inferred unless a type supports multiple flows.
   */
  flow?: ("code_verification" | "none" | "receiver" | "redirect") | undefined;
  /**
   * Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
   */
  mandate?: SourceCreateBodyMandate | undefined;
  metadata?: SourceCreateBodyMetadata | undefined;
  /**
   * The source to share.
   */
  originalSource?: string | undefined;
  /**
   * Information about the owner of the payment instrument that may be used or required by particular source types.
   */
  owner?: SourceCreateBodyOwner | undefined;
  /**
   * Optional parameters for the receiver flow. Can be set only if the source is a receiver (`flow` is `receiver`).
   */
  receiver?: SourceCreateBodyReceiver | undefined;
  /**
   * Parameters required for the redirect flow. Required if the source is authenticated by a redirect (`flow` is `redirect`).
   */
  redirect?: SourceCreateBodyRedirect | undefined;
  /**
   * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
   */
  sourceOrder?: SourceCreateBodySourceOrder | undefined;
  /**
   * An arbitrary string to be displayed on your customer's statement. As an example, if your website is `RunClub` and the item you're charging for is a race ticket, you may want to specify a `statement_descriptor` of `RunClub 5K race ticket.` While many payment types will display this information, some may not display it at all.
   */
  statementDescriptor?: string | undefined;
  /**
   * An optional token used to create the source. When passed, token properties will override source parameters.
   */
  token?: string | undefined;
  /**
   * The `type` of the source to create. Required unless `customer` and `original_source` are specified (see the [Cloning card Sources](https://stripe.com/docs/sources/connect#cloning-card-sources) guide)
   */
  type?: string | undefined;
  usage?: ("reusable" | "single_use") | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (("code_verification" | "none" | "receiver" | "redirect") | undefined)
    | (SourceCreateBodyMandate | undefined)
    | (SourceCreateBodyMetadata | undefined)
    | (string | undefined)
    | (SourceCreateBodyOwner | undefined)
    | (SourceCreateBodyReceiver | undefined)
    | (SourceCreateBodyRedirect | undefined)
    | (SourceCreateBodySourceOrder | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (("reusable" | "single_use") | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * SourceCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceCreateBody = {
  amount?: number | undefined;
  currency?: string | undefined;
  customer?: string | undefined;
  expand?: string[] | undefined;
  flow?: ("code_verification" | "none" | "receiver" | "redirect") | undefined;
  mandate?: External$SourceCreateBodyMandate | undefined;
  metadata?: External$SourceCreateBodyMetadata | undefined;
  original_source?: string | undefined;
  owner?: External$SourceCreateBodyOwner | undefined;
  receiver?: External$SourceCreateBodyReceiver | undefined;
  redirect?: External$SourceCreateBodyRedirect | undefined;
  source_order?: External$SourceCreateBodySourceOrder | undefined;
  statement_descriptor?: string | undefined;
  token?: string | undefined;
  type?: string | undefined;
  usage?: ("reusable" | "single_use") | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (("code_verification" | "none" | "receiver" | "redirect") | undefined)
    | (External$SourceCreateBodyMandate | undefined)
    | (External$SourceCreateBodyMetadata | undefined)
    | (string | undefined)
    | (External$SourceCreateBodyOwner | undefined)
    | (External$SourceCreateBodyReceiver | undefined)
    | (External$SourceCreateBodyRedirect | undefined)
    | (External$SourceCreateBodySourceOrder | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (("reusable" | "single_use") | undefined)
    | External$SourceCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceCreateBody
 */
const SchemaIn$SourceCreateBody: z.ZodType<
  SourceCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    currency: z.string().optional(),
    customer: z.string().optional(),
    expand: z.array(z.string()).optional(),
    flow: z
      .enum(["code_verification", "none", "receiver", "redirect"])
      .optional(),
    mandate: Schemas$SourceCreateBodyMandate.in.optional(),
    metadata: Schemas$SourceCreateBodyMetadata.in.optional(),
    original_source: z.string().optional(),
    owner: Schemas$SourceCreateBodyOwner.in.optional(),
    receiver: Schemas$SourceCreateBodyReceiver.in.optional(),
    redirect: Schemas$SourceCreateBodyRedirect.in.optional(),
    source_order: Schemas$SourceCreateBodySourceOrder.in.optional(),
    statement_descriptor: z.string().optional(),
    token: z.string().optional(),
    type: z.string().optional(),
    usage: z.enum(["reusable", "single_use"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      customer: "customer",
      expand: "expand",
      flow: "flow",
      mandate: "mandate",
      metadata: "metadata",
      original_source: "originalSource",
      owner: "owner",
      receiver: "receiver",
      redirect: "redirect",
      source_order: "sourceOrder",
      statement_descriptor: "statementDescriptor",
      token: "token",
      type: "type",
      usage: "usage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceCreateBody
 */
const SchemaOut$SourceCreateBody: z.ZodType<
  External$SourceCreateBody, // output type of this zod object
  z.ZodTypeDef,
  SourceCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    currency: z.string().optional(),
    customer: z.string().optional(),
    expand: z.array(z.string()).optional(),
    flow: z
      .enum(["code_verification", "none", "receiver", "redirect"])
      .optional(),
    mandate: Schemas$SourceCreateBodyMandate.out.optional(),
    metadata: Schemas$SourceCreateBodyMetadata.out.optional(),
    originalSource: z.string().optional(),
    owner: Schemas$SourceCreateBodyOwner.out.optional(),
    receiver: Schemas$SourceCreateBodyReceiver.out.optional(),
    redirect: Schemas$SourceCreateBodyRedirect.out.optional(),
    sourceOrder: Schemas$SourceCreateBodySourceOrder.out.optional(),
    statementDescriptor: z.string().optional(),
    token: z.string().optional(),
    type: z.string().optional(),
    usage: z.enum(["reusable", "single_use"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      customer: "customer",
      expand: "expand",
      flow: "flow",
      mandate: "mandate",
      metadata: "metadata",
      originalSource: "original_source",
      owner: "owner",
      receiver: "receiver",
      redirect: "redirect",
      sourceOrder: "source_order",
      statementDescriptor: "statement_descriptor",
      token: "token",
      type: "type",
      usage: "usage",
    });
  });

export const Schemas$SourceCreateBody = {
  in: SchemaIn$SourceCreateBody,
  out: SchemaOut$SourceCreateBody,
};
