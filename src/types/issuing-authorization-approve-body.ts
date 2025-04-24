import {
  External$IssuingAuthorizationApproveBodyMetadataObj0,
  IssuingAuthorizationApproveBodyMetadataObj0,
  Schemas$IssuingAuthorizationApproveBodyMetadataObj0,
} from "./issuing-authorization-approve-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingAuthorizationApproveBody
 */
export type IssuingAuthorizationApproveBody = {
  /**
   * If the authorization's `pending_request.is_amount_controllable` property is `true`, you may provide this value to control how much to hold for the authorization. Must be positive (use [`decline`](https://stripe.com/docs/api/issuing/authorizations/decline) to decline an authorization request).
   */
  amount?: number | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (IssuingAuthorizationApproveBodyMetadataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (string[] | undefined)
    | ((IssuingAuthorizationApproveBodyMetadataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * IssuingAuthorizationApproveBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationApproveBody = {
  amount?: number | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$IssuingAuthorizationApproveBodyMetadataObj0 | string)
    | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (string[] | undefined)
    | (
        | (External$IssuingAuthorizationApproveBodyMetadataObj0 | string)
        | undefined
      )
    | External$IssuingAuthorizationApproveBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationApproveBody
 */
const SchemaIn$IssuingAuthorizationApproveBody: z.ZodType<
  IssuingAuthorizationApproveBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([
        Schemas$IssuingAuthorizationApproveBodyMetadataObj0.in,
        z.string(),
      ])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      expand: "expand",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationApproveBody
 */
const SchemaOut$IssuingAuthorizationApproveBody: z.ZodType<
  External$IssuingAuthorizationApproveBody, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationApproveBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([
        Schemas$IssuingAuthorizationApproveBodyMetadataObj0.out,
        z.string(),
      ])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      expand: "expand",
      metadata: "metadata",
    });
  });

export const Schemas$IssuingAuthorizationApproveBody = {
  in: SchemaIn$IssuingAuthorizationApproveBody,
  out: SchemaOut$IssuingAuthorizationApproveBody,
};
