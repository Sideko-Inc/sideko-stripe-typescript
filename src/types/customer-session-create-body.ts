import {
  CustomerSessionCreateBodyComponents,
  External$CustomerSessionCreateBodyComponents,
  Schemas$CustomerSessionCreateBodyComponents,
} from "./customer-session-create-body-components";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSessionCreateBody
 */
export type CustomerSessionCreateBody = {
  /**
   * Configuration for each component. Exactly 1 component must be enabled.
   */
  components: CustomerSessionCreateBodyComponents;
  /**
   * The ID of an existing customer for which to create the Customer Session.
   */
  customer: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | CustomerSessionCreateBodyComponents
    | string
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CustomerSessionCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSessionCreateBody = {
  components: External$CustomerSessionCreateBodyComponents;
  customer: string;
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | External$CustomerSessionCreateBodyComponents
    | string
    | (string[] | undefined)
    | External$CustomerSessionCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSessionCreateBody
 */
const SchemaIn$CustomerSessionCreateBody: z.ZodType<
  CustomerSessionCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    components: Schemas$CustomerSessionCreateBodyComponents.in,
    customer: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      components: "components",
      customer: "customer",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSessionCreateBody
 */
const SchemaOut$CustomerSessionCreateBody: z.ZodType<
  External$CustomerSessionCreateBody, // output type of this zod object
  z.ZodTypeDef,
  CustomerSessionCreateBody // the object to be transformed
> = z
  .object({
    components: Schemas$CustomerSessionCreateBodyComponents.out,
    customer: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      components: "components",
      customer: "customer",
      expand: "expand",
    });
  });

export const Schemas$CustomerSessionCreateBody = {
  in: SchemaIn$CustomerSessionCreateBody,
  out: SchemaOut$CustomerSessionCreateBody,
};
