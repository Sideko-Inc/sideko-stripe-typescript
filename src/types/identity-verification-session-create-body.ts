import {
  External$IdentityVerificationSessionCreateBodyMetadata,
  IdentityVerificationSessionCreateBodyMetadata,
  Schemas$IdentityVerificationSessionCreateBodyMetadata,
} from "./identity-verification-session-create-body-metadata";
import {
  External$IdentityVerificationSessionCreateBodyOptions,
  IdentityVerificationSessionCreateBodyOptions,
  Schemas$IdentityVerificationSessionCreateBodyOptions,
} from "./identity-verification-session-create-body-options";
import {
  External$IdentityVerificationSessionCreateBodyProvidedDetails,
  IdentityVerificationSessionCreateBodyProvidedDetails,
  Schemas$IdentityVerificationSessionCreateBodyProvidedDetails,
} from "./identity-verification-session-create-body-provided-details";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IdentityVerificationSessionCreateBody
 */
export type IdentityVerificationSessionCreateBody = {
  /**
   * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
   */
  clientReferenceId?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: IdentityVerificationSessionCreateBodyMetadata | undefined;
  /**
   * A set of options for the session’s verification checks.
   */
  options?: IdentityVerificationSessionCreateBodyOptions | undefined;
  /**
   * Details provided about the user being verified. These details may be shown to the user.
   */
  providedDetails?:
    | IdentityVerificationSessionCreateBodyProvidedDetails
    | undefined;
  /**
   * Customer ID
   */
  relatedCustomer?: string | undefined;
  /**
   * The URL that the user will be redirected to upon completing the verification flow.
   */
  returnUrl?: string | undefined;
  /**
   * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed. You must provide a `type` if not passing `verification_flow`.
   */
  type?: ("document" | "id_number") | undefined;
  /**
   * The ID of a verification flow from the Dashboard. See https://docs.stripe.com/identity/verification-flows.
   */
  verificationFlow?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | (string[] | undefined)
    | (IdentityVerificationSessionCreateBodyMetadata | undefined)
    | (IdentityVerificationSessionCreateBodyOptions | undefined)
    | (IdentityVerificationSessionCreateBodyProvidedDetails | undefined)
    | (string | undefined)
    | (string | undefined)
    | (("document" | "id_number") | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * IdentityVerificationSessionCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IdentityVerificationSessionCreateBody = {
  client_reference_id?: string | undefined;
  expand?: string[] | undefined;
  metadata?: External$IdentityVerificationSessionCreateBodyMetadata | undefined;
  options?: External$IdentityVerificationSessionCreateBodyOptions | undefined;
  provided_details?:
    | External$IdentityVerificationSessionCreateBodyProvidedDetails
    | undefined;
  related_customer?: string | undefined;
  return_url?: string | undefined;
  type?: ("document" | "id_number") | undefined;
  verification_flow?: string | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | (string[] | undefined)
    | (External$IdentityVerificationSessionCreateBodyMetadata | undefined)
    | (External$IdentityVerificationSessionCreateBodyOptions | undefined)
    | (
        | External$IdentityVerificationSessionCreateBodyProvidedDetails
        | undefined
      )
    | (string | undefined)
    | (string | undefined)
    | (("document" | "id_number") | undefined)
    | (string | undefined)
    | External$IdentityVerificationSessionCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IdentityVerificationSessionCreateBody
 */
const SchemaIn$IdentityVerificationSessionCreateBody: z.ZodType<
  IdentityVerificationSessionCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    client_reference_id: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata:
      Schemas$IdentityVerificationSessionCreateBodyMetadata.in.optional(),
    options: Schemas$IdentityVerificationSessionCreateBodyOptions.in.optional(),
    provided_details:
      Schemas$IdentityVerificationSessionCreateBodyProvidedDetails.in.optional(),
    related_customer: z.string().optional(),
    return_url: z.string().optional(),
    type: z.enum(["document", "id_number"]).optional(),
    verification_flow: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      client_reference_id: "clientReferenceId",
      expand: "expand",
      metadata: "metadata",
      options: "options",
      provided_details: "providedDetails",
      related_customer: "relatedCustomer",
      return_url: "returnUrl",
      type: "type",
      verification_flow: "verificationFlow",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IdentityVerificationSessionCreateBody
 */
const SchemaOut$IdentityVerificationSessionCreateBody: z.ZodType<
  External$IdentityVerificationSessionCreateBody, // output type of this zod object
  z.ZodTypeDef,
  IdentityVerificationSessionCreateBody // the object to be transformed
> = z
  .object({
    clientReferenceId: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata:
      Schemas$IdentityVerificationSessionCreateBodyMetadata.out.optional(),
    options:
      Schemas$IdentityVerificationSessionCreateBodyOptions.out.optional(),
    providedDetails:
      Schemas$IdentityVerificationSessionCreateBodyProvidedDetails.out.optional(),
    relatedCustomer: z.string().optional(),
    returnUrl: z.string().optional(),
    type: z.enum(["document", "id_number"]).optional(),
    verificationFlow: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      clientReferenceId: "client_reference_id",
      expand: "expand",
      metadata: "metadata",
      options: "options",
      providedDetails: "provided_details",
      relatedCustomer: "related_customer",
      returnUrl: "return_url",
      type: "type",
      verificationFlow: "verification_flow",
    });
  });

export const Schemas$IdentityVerificationSessionCreateBody = {
  in: SchemaIn$IdentityVerificationSessionCreateBody,
  out: SchemaOut$IdentityVerificationSessionCreateBody,
};
