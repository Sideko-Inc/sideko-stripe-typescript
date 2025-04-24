import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperTestClockCreateBody
 */
export type TestHelperTestClockCreateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The initial frozen time for this test clock.
   */
  frozenTime: number;
  /**
   * The name for this test clock.
   */
  name?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | number
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperTestClockCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTestClockCreateBody = {
  expand?: string[] | undefined;
  frozen_time: number;
  name?: string | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | number
    | (string | undefined)
    | External$TestHelperTestClockCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTestClockCreateBody
 */
const SchemaIn$TestHelperTestClockCreateBody: z.ZodType<
  TestHelperTestClockCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    frozen_time: z.number().int(),
    name: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      frozen_time: "frozenTime",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTestClockCreateBody
 */
const SchemaOut$TestHelperTestClockCreateBody: z.ZodType<
  External$TestHelperTestClockCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTestClockCreateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    frozenTime: z.number().int(),
    name: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      frozenTime: "frozen_time",
      name: "name",
    });
  });

export const Schemas$TestHelperTestClockCreateBody = {
  in: SchemaIn$TestHelperTestClockCreateBody,
  out: SchemaOut$TestHelperTestClockCreateBody,
};
