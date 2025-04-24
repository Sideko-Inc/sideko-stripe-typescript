import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * EphemeralKeyCreateBody
 */
export type EphemeralKeyCreateBody = {
  /**
   * The ID of the Customer you'd like to modify using the resulting ephemeral key.
   */
  customer?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The ID of the Issuing Card you'd like to access using the resulting ephemeral key.
   */
  issuingCard?: string | undefined;
  /**
   * A single-use token, created by Stripe.js, used for creating ephemeral keys for Issuing Cards without exchanging sensitive information.
   */
  nonce?: string | undefined;
  /**
   * The ID of the Identity VerificationSession you'd like to access using the resulting ephemeral key
   */
  verificationSession?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * EphemeralKeyCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EphemeralKeyCreateBody = {
  customer?: string | undefined;
  expand?: string[] | undefined;
  issuing_card?: string | undefined;
  nonce?: string | undefined;
  verification_session?: string | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | External$EphemeralKeyCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EphemeralKeyCreateBody
 */
const SchemaIn$EphemeralKeyCreateBody: z.ZodType<
  EphemeralKeyCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer: z.string().optional(),
    expand: z.array(z.string()).optional(),
    issuing_card: z.string().optional(),
    nonce: z.string().optional(),
    verification_session: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      expand: "expand",
      issuing_card: "issuingCard",
      nonce: "nonce",
      verification_session: "verificationSession",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EphemeralKeyCreateBody
 */
const SchemaOut$EphemeralKeyCreateBody: z.ZodType<
  External$EphemeralKeyCreateBody, // output type of this zod object
  z.ZodTypeDef,
  EphemeralKeyCreateBody // the object to be transformed
> = z
  .object({
    customer: z.string().optional(),
    expand: z.array(z.string()).optional(),
    issuingCard: z.string().optional(),
    nonce: z.string().optional(),
    verificationSession: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      expand: "expand",
      issuingCard: "issuing_card",
      nonce: "nonce",
      verificationSession: "verification_session",
    });
  });

export const Schemas$EphemeralKeyCreateBody = {
  in: SchemaIn$EphemeralKeyCreateBody,
  out: SchemaOut$EphemeralKeyCreateBody,
};
