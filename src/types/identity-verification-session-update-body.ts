import {
  External$IdentityVerificationSessionUpdateBodyMetadata,
  IdentityVerificationSessionUpdateBodyMetadata,
  Schemas$IdentityVerificationSessionUpdateBodyMetadata,
} from "./identity-verification-session-update-body-metadata";
import {
  External$IdentityVerificationSessionUpdateBodyOptions,
  IdentityVerificationSessionUpdateBodyOptions,
  Schemas$IdentityVerificationSessionUpdateBodyOptions,
} from "./identity-verification-session-update-body-options";
import {
  External$IdentityVerificationSessionUpdateBodyProvidedDetails,
  IdentityVerificationSessionUpdateBodyProvidedDetails,
  Schemas$IdentityVerificationSessionUpdateBodyProvidedDetails,
} from "./identity-verification-session-update-body-provided-details";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IdentityVerificationSessionUpdateBody
 */
export type IdentityVerificationSessionUpdateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: IdentityVerificationSessionUpdateBodyMetadata | undefined;
  /**
   * A set of options for the session’s verification checks.
   */
  options?: IdentityVerificationSessionUpdateBodyOptions | undefined;
  /**
   * Details provided about the user being verified. These details may be shown to the user.
   */
  providedDetails?:
    | IdentityVerificationSessionUpdateBodyProvidedDetails
    | undefined;
  /**
   * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed.
   */
  type?: ("document" | "id_number") | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (IdentityVerificationSessionUpdateBodyMetadata | undefined)
    | (IdentityVerificationSessionUpdateBodyOptions | undefined)
    | (IdentityVerificationSessionUpdateBodyProvidedDetails | undefined)
    | (("document" | "id_number") | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * IdentityVerificationSessionUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IdentityVerificationSessionUpdateBody = {
  expand?: string[] | undefined;
  metadata?: External$IdentityVerificationSessionUpdateBodyMetadata | undefined;
  options?: External$IdentityVerificationSessionUpdateBodyOptions | undefined;
  provided_details?:
    | External$IdentityVerificationSessionUpdateBodyProvidedDetails
    | undefined;
  type?: ("document" | "id_number") | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (External$IdentityVerificationSessionUpdateBodyMetadata | undefined)
    | (External$IdentityVerificationSessionUpdateBodyOptions | undefined)
    | (
        | External$IdentityVerificationSessionUpdateBodyProvidedDetails
        | undefined
      )
    | (("document" | "id_number") | undefined)
    | External$IdentityVerificationSessionUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IdentityVerificationSessionUpdateBody
 */
const SchemaIn$IdentityVerificationSessionUpdateBody: z.ZodType<
  IdentityVerificationSessionUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata:
      Schemas$IdentityVerificationSessionUpdateBodyMetadata.in.optional(),
    options: Schemas$IdentityVerificationSessionUpdateBodyOptions.in.optional(),
    provided_details:
      Schemas$IdentityVerificationSessionUpdateBodyProvidedDetails.in.optional(),
    type: z.enum(["document", "id_number"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      options: "options",
      provided_details: "providedDetails",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IdentityVerificationSessionUpdateBody
 */
const SchemaOut$IdentityVerificationSessionUpdateBody: z.ZodType<
  External$IdentityVerificationSessionUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  IdentityVerificationSessionUpdateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata:
      Schemas$IdentityVerificationSessionUpdateBodyMetadata.out.optional(),
    options:
      Schemas$IdentityVerificationSessionUpdateBodyOptions.out.optional(),
    providedDetails:
      Schemas$IdentityVerificationSessionUpdateBodyProvidedDetails.out.optional(),
    type: z.enum(["document", "id_number"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      options: "options",
      providedDetails: "provided_details",
      type: "type",
    });
  });

export const Schemas$IdentityVerificationSessionUpdateBody = {
  in: SchemaIn$IdentityVerificationSessionUpdateBody,
  out: SchemaOut$IdentityVerificationSessionUpdateBody,
};
